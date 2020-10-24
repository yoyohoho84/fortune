import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  ScreenSpinner,
  TabbarItem,
  Epic,
  Div,
  Tabbar,
  ConfigProvider,
  ActionSheet,
  ActionSheetItem,
  Snackbar,
  Avatar,
  CellButton,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Icon16Done from "@vkontakte/icons/dist/16/done";
import Icon16Cancel from "@vkontakte/icons/dist/16/cancel";

import { APIManager, sharing, msToTime } from "./helpers";

import { ModalPrize } from "./modal";
import {
  APP_ID,
  GROUP_ID,
  QIWI_PUBLIC_KEY,
  APP_AVATAR,
  APP_IMG_SHARING,
  APP_IMG_SHARING_WALL,
  USER_ID,
} from "./constants";

import { Home, AdditionalAttempts, ApplicationDescription } from "./panels";

import "./styles/reset.sass";
import "./styles/img.sass";

const { callMethod } = APIManager;

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [activeModal, setActiveModal] = useState(null);
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(null);
  const [snackbar, setSnackbar] = useState(null);

  // user fields
  const [attempts, setAttempts] = useState(null);
  const [timeToStoryShare, setTimeToStoryShare] = useState(0);
  const [timeToWallShare, setTimeToWallShare] = useState(0);
  const [timeToAttempt, setTimeToAttempt] = useState();

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    // async function fetchData() {
    //   const user = await bridge.send("VKWebAppGetUserInfo");
    //   setUser(user);
    //   setPopout(null);
    // }
    // fetchData();
  }, []);

  const getUser = () => {
    callMethod("getUser").then((res) => {
      if (res.user) {
        setAttempts(res.user.attempts);
        setTimeToStoryShare(res.user.timeToStoryShare);
        setTimeToWallShare(res.user.timeToWallShare);
        setTimeToAttempt(res.user.timeToAttempt);
      }
    });
  };
  useEffect(() => {
    getUser();
  }, []);

  // разрешение на отправку сообщений
  function allowMessages() {
    bridge
      .send("VKWebAppAllowMessagesFromGroup", { group_id: GROUP_ID })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        setTimeout(allowMessages, 5000);
        console.log("err", err);
      });
  }

  // Подписка на группу
  function addGroup() {
    bridge
      .send("VKWebAppJoinGroup", { group_id: GROUP_ID })
      .then(({ result }) => {
        console.log("VKWebAppJoinGroup", result);
      });
  }

  // всплывающие уведомление с информацией
  function openAlert(text, backgroundColor = "green") {
    if (snackbar) return;
    setSnackbar(
      <Snackbar
        duration="7000"
        layout="horizontal"
        onClose={() => setSnackbar(null)}
        before={
          <Avatar size={24} style={{ backgroundColor }}>
            {backgroundColor === "green" ? (
              <Icon16Done fill="#fff" width={14} height={14} />
            ) : (
              <Icon16Cancel fill="#fff" width={14} height={14} />
            )}
          </Avatar>
        }
      >
        {text}
      </Snackbar>
    );
  }

  function openPopoutSharing() {
    setActiveModal(null);
    setPopout(
      <>
        <ActionSheet onClose={() => setPopout(null)}>
          <ActionSheetItem
            autoclose
            onClick={() => {
              if (timeToStoryShare < Date.now())
                sharing("story", openAlert, null, getUser);
              else
                openAlert(
                  `Получить бонусную попытку за историю можно через ${msToTime(
                    timeToStoryShare - Date.now()
                  )}`
                );
            }}
          >
            Поделиться в истории +1
          </ActionSheetItem>
          <ActionSheetItem
            autoclose
            onClick={(e) => {
              if (timeToWallShare < Date.now())
                sharing("share-wall", openAlert, e, getUser)
              else
                openAlert(
                  `Получить бонусную попытку за пост можно через ${msToTime(
                    timeToWallShare - Date.now()
                  )}`
                );
            }}
          >
            Поделиться на стене +1
          </ActionSheetItem>
          <ActionSheetItem autoclose onClick={addGroup}>
            Подписаться на группу +1
          </ActionSheetItem>
          {/* <ActionSheetItem
            autoclose
            onClick={(e) => sharing("app-notification")}
          >
            Разрешить уведомления +1
          </ActionSheetItem> */}
        </ActionSheet>
      </>
    );
  }

  function openModal(type) {
    setActiveModal(
      <ModalPrize
        setActiveModal={setActiveModal}
        APP_AVATAR={APP_AVATAR}
        getUser={getUser}
        type={type}
      />
    );
  }

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <View activePanel={activePanel} popout={popout} modal={activeModal}>
      <Home
        id="home"
        fetchedUser={fetchedUser}
        go={go}
        snackbar={snackbar}
        openAlert={openAlert}
        openPopoutSharing={openPopoutSharing}
        allowMessages={allowMessages}
        attempts={attempts}
        timeToAttempt={timeToAttempt}
        getUser={getUser}
        openModal={openModal}
      />
      <AdditionalAttempts
        id="additional-attempts"
        fetchedUser={fetchedUser}
        go={go}
        snackbar={snackbar}
        openAlert={openAlert}
      />
      <ApplicationDescription
        id="application-description"
        fetchedUser={fetchedUser}
        go={go}
        snackbar={snackbar}
        openAlert={openAlert}
      />
    </View>
  );
};
export default App;
