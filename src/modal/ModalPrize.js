import React, { useState, useEffect } from "react";
import { ModalRoot, ModalCard, Avatar, Div, Button } from "@vkontakte/vkui";
import { NAME_PROJECT, APP_AVATAR } from "../constants";

const ModalPrize = ({
  setActiveModal,
  addGroup,
  openModalSharing,
  referrals,
}) => {
  return (
    <>
      <ModalRoot activeModal="modal-prize">
        <ModalCard
          id="modal-prize"
          onClose={() => {
            setActiveModal(null);
          }}
          header={NAME_PROJECT}
          icon={<Avatar size={72} src={APP_AVATAR} />}
          caption={
            <>
              <Div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Div>
                  Чтобы поулчить приз, нажми кнопку "Получить приз"
                </Div>

                <Button
                  size="l"
                  mode="commerce"
                  onClick={() => {}}
                  style={{
                    // backgroundColor: "green",
                    color: "white",
                    marginTop: "30px",
                    width: "260px",
                  }}
                >
                  <span style={{ fontSize: "17px" }}> Поулчить приз</span>
                </Button>
              </Div>
            </>
          }
          // actions={[
          //   {
          //     title: "Получить",
          //     mode: "commerce",
          //     action: () => {
          //       console.log("referrals", referrals);
          //       if (referrals === 0) setTimeout(openModalSharing, 10000);
          //       addGroup();
          //     },
          //   },
          // ]}
        ></ModalCard>
      </ModalRoot>
    </>
  );
};

export { ModalPrize };
