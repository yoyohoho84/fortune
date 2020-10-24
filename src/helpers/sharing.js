import bridge from "@vkontakte/vk-bridge";
import {
  APP_ID,
  APP_IMG_SHARING,
  APP_IMG_SHARING_WALL,
  USER_ID,
} from "../constants";

import { APIManager, msToTime } from './';
const { callMethod } = APIManager;

export function sharing(type, openAlert, e, getUser) {
  switch (type) {
    case "app-notification":
      appNotification(getUser);
      break;
    case "story":
      story(getUser, openAlert);
      break;
    case "share-wall":
      share(e, getUser, openAlert);
      break;
    default:
      break;
  }
}

// запрос на отправку уведомлений
function appNotification() {
  bridge
    .sendPromise("VKWebAppAllowNotifications")
    .then((res) => {
      console.log("res", res);
      if(res){
        // пользователь разрешил отправку сообщений
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
}

//  Поделиться в истории
function story(getUser, openAlert) {
  const url = `https://vk.com/app${APP_ID}#${USER_ID}`;

  bridge.sendPromise("VKWebAppShowStoryBox", {
    background_type: "image",
    url: APP_IMG_SHARING,
    attachment: {
      text: "go_to",
      type: "url",
      url: url,
    },
  }).then((res) => {
    if (res.result) {
      return callMethod('story');
    }
  }).then((res) => {
    if (res.added === true) {
      openAlert("Вы получили 1 бонусную попытку");
    } else {
      openAlert(`Ещё одну попытку за историю можно получить через ${msToTime(res.time)}`);
    }
    getUser();
  });
}

//  ДОБАВЛЕНИЕ РЕПОСТА НА СТЕНУ ПОЛЬЗОВАТЕЛЯ
function share(e, getUser, openAlert) {
  e.preventDefault();
  const url = `https://vk.com/app${APP_ID}#${USER_ID}`;
  const urlPhotoStories = `${APP_IMG_SHARING_WALL},https://vk.com/app${APP_ID}#${USER_ID}`;
  // const textStories = `Заходи в приложение и узнай, кого лайкает или кому пишет твоя вторая половинка, Приложение - ${url}`;

  bridge.send("VKWebAppShowWallPostBox", {
    message: "",
    // message: textStories,
    attachments: urlPhotoStories,
  }).then((res) => {
    if (res.post_id > 0) {
      return callMethod('wall');
    }
  }).then((res) => {
    if (res.added === true) {
      openAlert("Вы получили 1 бонусную попытку");
    } else {
      openAlert(`Ещё одну попытку за репост можно получить через ${msToTime(res.time)}`);
    }
    getUser();
  });
}
