import React, { useState, useEffect, useRef } from "react";
import bridge from "@vkontakte/vk-bridge";
import Bounce from "react-reveal/Bounce";
import {
  Input,
  Panel,
  Group,
  Div,
  Button,
  HorizontalScroll,
  PanelHeader,
  Spinner,
  FixedLayout,
  PromoBanner,
} from "@vkontakte/vkui";

import { GROUP_ID } from "../constants";
import { APIManager, msToTime } from "../helpers";
const { callMethod } = APIManager;

let interval;

const Home = ({
  id,
  go,
  fetchedUser,
  snackbar,
  openAlert,
  openPopoutSharing,
  allowMessages,
  attempts,
  timeToAttempt,
  getUser,
  openModal,
}) => {
  const [twist, setTwist] = useState(false);
  const [angleRotate, setAngleRotate] = useState("");
  const arr = [
    "animationOne",
    "animationTwo",
    "animationThree",
    "animationFour",
  ];
  const [tta, setTta] = useState(timeToAttempt - Date.now());

  useEffect(() => {
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
      setTta(timeToAttempt - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [timeToAttempt]);

  function getRandomArr() {
    let a = 0;
    const max = Math.floor(arr.length);
    const resRandom = Math.floor(Math.random() * max);

    bridge
      .sendPromise("VKWebAppAllowMessagesFromGroup", { group_id: GROUP_ID })
      .then((res) => {
        if (res.status === false) return;

        return callMethod("twist");
      })
      .then((res) => {
        if (res.status === false) {
          openAlert("Вы не можете крутить колесо", "red");
        } else {
          a = arr[resRandom];

          console.log("res", resRandom + 1);
          console.log("a", a);
          setAngleRotate(arr[resRandom]);

          setTimeout(() => {
            openModal("prize");
          }, (resRandom + 4) * 1000);
          getUser();
        }
      })
      .catch((err) => {
        console.log("err", err);
        return openAlert(
          "Разрешите отправку сообщений, чтобы крутить колесо удачи",
          "red"
        );
      });
  }

  return (
    <Panel id={id}>
      <Div className="imgPanelHome">
        <Div
          style={{
            fontSize: "15px",
            color: "white",
            margin: "10px 0px 20px 0px",
          }}
        >
          Попытки: {attempts}
        </Div>
        {tta > 0 && (
          <Bounce top duration={3000}>
            <Div style={{ fontSize: "15px", color: "white", margin: "10px" }}>
              {" "}
              ОСТАЛОСЬ ДО СЛЕДУЮЩЕЙ ПОПЫТКИ:{" "}
            </Div>
            <Div
              style={{ fontSize: "25px", color: "white", marginBottom: "20px" }}
            >
              {" "}
              {msToTime(tta)}{" "}
            </Div>
          </Bounce>
        )}
        <Div className={tta > 0 ? "imgPointer Attempts" : "imgPointer"}></Div>
        <Div className={`imgFortune ${angleRotate}`}></Div>

        <Button
          size="l"
          mode="commerce"
          onClick={() => {
            getRandomArr();
            // getRandomInt(0, 360);
            // setTwist(!twist);
          }}
          style={{
            // backgroundColor: "green",
            color: "white",
            marginTop: "30px",
            width: "260px",
          }}
          disabled={Boolean(tta > 0) || attempts === 0}
        >
          <span style={{ fontSize: "17px" }}> Крутить колесо</span>
        </Button>
        <Button
          size="l"
          mode="overlay_primary"
          onClick={openPopoutSharing}
          // data-to="additional-attempts"
          style={{
            // backgroundColor: "white",
            // color: "black",
            marginTop: "15px",
            width: "260px",
          }}
        >
          <span style={{ fontSize: "17px" }}> Дополнительные попытки</span>
        </Button>
      </Div>
      {snackbar}
    </Panel>
  );
};

export { Home };
