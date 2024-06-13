import React from "react";
import s from "./Chating.module.scss";
import { Message } from "../../pages/chat/Chat";

interface Props {
  messages: Message[],
  status: string
}

export const Chating: React.FC<Props> = ({ messages, status }) => {
  return (
    <div className={s.container}>
      {messages.map((elem) =>
        elem.name === localStorage.getItem("user") ? (
          <div className={`${s.chats} ${s.sendler}`} key={elem.id}>
            <p>Вы</p>
            <p className={s.message}>{elem.text}</p>
          </div>
        ) : (
          <div className={`${s.chats} ${s.recipient}`} key={elem.id}>
            <p>{elem.name}</p>
            <p className={s.message}>{elem.text}</p>
          </div>
        )
      )}
      <div className={s.status}>
          <p>{status}...</p>
      </div>
    </div>
  );
};
