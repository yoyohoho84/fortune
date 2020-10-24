import React, { useState, useEffect } from "react";
import { ModalPrize } from "../modal";

export function modal(type, setActiveModal, openPayment, APP_AVATAR) {
  switch (type) {
    case "prize":
      setActiveModal(
        <ModalPrize
          setActiveModal={setActiveModal}
          openPayment={openPayment}
          APP_AVATAR={APP_AVATAR}
        />
      );
      break;
    // case "buy-VIP":
    //   setActiveModal(
    //     <ModalBuyVIP
    //       setActiveModal={setActiveModal}
    //       openPayment={openPayment}
    //       APP_AVATAR={APP_AVATAR}
    //     />
    //   );
    //   break;
    default:
      break;
  }
}
