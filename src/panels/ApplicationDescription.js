import React, { useState, useEffect } from "react";
import Spin from "react-reveal/Spin";
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

const ApplicationDescription = ({ id, go, fetchedUser, snackbar, openAlert }) => {
  const [twist, setTwist] = useState(false);
  const [angleRotate, setAngleRotate] = useState("");
  const arr = [
    "animationOne",
    "animationTwo",
    "animationThree",
    "animationFour",
  ];

  useEffect(() => {
    // getRandomArr();
  }, []);

  function getRandomArr() {
    let a = 0;
    const min = Math.ceil(0);
    const max = Math.floor(arr.length - 1);
    const res = Math.floor(Math.random() * (max - 0)) + min;

    setAngleRotate(arr[res]);
    setTimeout(() => {
      setAngleRotate("");
    }, 1000);
    a = arr[res];
    console.log("res", res);
    console.log("a", a);
  }

  return (
    <Panel id={id}>
      <Div className="imgPanelHome">
        <Div className="imgPointer"></Div>

        <Div className={`imgFortune ${angleRotate}`}></Div>

        <Button
          size="l"
          onClick={() => {
            getRandomArr();
            // getRandomInt(0, 360);
            // setTwist(!twist);
          }}
          style={{
            backgroundColor: "green",
            color: "white",
            marginTop: "30px",
            width: "260px",
          }}
        >
          <span style={{ fontSize: "17px" }}> Крутить колесо</span>
        </Button>
        <Button
          size="l"
          onClick={() => openAlert("Ошибка !", "red")}
          style={{
            backgroundColor: "white",
            color: "black",
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

export { ApplicationDescription };
