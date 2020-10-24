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

const Home = ({ id, go, fetchedUser, snackbar, openAlert }) => {
  const [twist, setTwist] = useState(false);
  const [angleRotate, setAngleRotate] = useState(0);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    setAngleRotate(Math.floor(Math.random() * (max - min)) + min);
  }

  return (
    <Panel id={id}>
      <Div className="imgPanelHome">
        <Div className="imgPointer"></Div>

        {twist ? (
          <Spin duration={5000}>
            <Div
              className="imgFortune"
              style={{ transform: `rotate(${angleRotate}deg) ` }}
            ></Div>
          </Spin>
        ) : (
          <Spin duration={5000}>
            <Div
              className="imgFortune"
              style={{ transform: `rotate(${angleRotate}deg) ` }}
            ></Div>
          </Spin>
        )}

        <Button
          size="l"
          onClick={() => {
            getRandomInt(0, 360);
            setTwist(!twist);
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

export { Home };
