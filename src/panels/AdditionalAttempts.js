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

const AdditionalAttempts = ({ id, go, fetchedUser, snackbar, openAlert }) => {
  return (
    <Panel id={id}>
      <Div className="imgPanelHome AdditionalAttempts" >
        <Div
          style={{
            color: "white",
            fontSize: "30px",
            fontWeight: "bold",
            margin: "0px 0px 10px 0px",
          }}
        >
          КОЛЕСО УДАЧИ
        </Div>

        <Div
          style={{
            width: "94%",
            background: "rgba(89, 76, 76, 0.5)",
            fontSize: "20px",
            margin: "0px 0px 20px 0px",
            padding: "20px",
            color: "white",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Div>Крути колесо удачи и выигрывай крутые призы.</Div>
          <Div>Каждый день тебе будет доступна одна бесплатная попытка.</Div>
        </Div>

        <Div className="imgPointer AdditionalAttempts"></Div>
        <Div className="imgFortune AdditionalAttempts animationInfinite"></Div>

        <Div
          style={{
            width: "94%",
            background: "rgba(89, 76, 76, 0.5)",
            fontSize: "20px",
            margin: "0px 0px 20px 0px",
            padding: "20px",
            color: "white",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Div>Заработай дополнительные попытки, выполняя легкие задания.</Div>
          {/* <Div>выполняя легкие задания.</Div> */}
        </Div>

        <Div
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            margin: "0px 0px 10px 0px",
          }}
        >
          ДОПОЛНИТЕЛЬНЫЕ ПОПЫТКИ
        </Div>

        <Button
          size="l"
          onClick={go}
          data-to="additional-attempts"
          style={{
            backgroundColor: "white",
            color: "black",
            marginTop: "15px",
            width: "260px",
          }}
        >
          <span style={{ fontSize: "17px" }}> Поделиться в истории +1</span>
        </Button>

        <Button
          size="l"
          onClick={go}
          data-to="additional-attempts"
          style={{
            backgroundColor: "white",
            color: "black",
            marginTop: "15px",
            width: "260px",
          }}
        >
          <span style={{ fontSize: "17px" }}> Поделиться на стене +1</span>
        </Button>

        <Button
          size="l"
          onClick={go}
          data-to="additional-attempts"
          style={{
            backgroundColor: "white",
            color: "black",
            marginTop: "15px",
            width: "260px",
          }}
        >
          <span style={{ fontSize: "17px" }}>Разрешить уведомления +1</span>
        </Button>

				<Button
          size="l"
          onClick={go}
          data-to="home"
          style={{
            backgroundColor: "green",
            color: "white",
            marginTop: "15px",
						width: "350px",
						height: "50px"
          }}
        >
          <span style={{ fontSize: "25px" }}>Продолжить</span>
        </Button>

      </Div>
      {snackbar}
    </Panel>
  );
};

export { AdditionalAttempts };
