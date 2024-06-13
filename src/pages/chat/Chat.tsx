import { Socket } from "socket.io-client";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { MessageBlock } from "../../components/message/MessageBlock";
import { Body } from "../../components/body/Body";
import { Chating } from "../../components/chating/Chating";
import s from "./styles.module.scss";
import React from "react";

interface Props {
  socket: Socket;
}

export interface Message {
  text: string;
  name: string;
  id: string;
  socketID: number;
}

export interface IUser {
  socketID: string;
  user: string;
}

export const Chat: React.FC<Props> = ({ socket }) => {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [status, setStatus] = React.useState<string>("");

  React.useEffect(() => {
    socket.on("response", (data) => {
      setMessages([...messages, data]);
    });
    socket.on("responseNewUser", (data: IUser[]) => {
      setUsers(data);
    });
  }, [messages, socket]);

  React.useEffect(() => {
    socket.on("responseTyping", (data: string) => {
      setStatus(data);
      setTimeout(() => {
        setStatus("");
      }, 1000);
    });
  }, [socket]);

  return (
    <>
      <div className={s.chat}>
        <Sidebar users={users} />
        <main className={s.main}>
          <Body socket={socket} />
          <Chating messages={messages} status={status} />
          <MessageBlock socket={socket} />
        </main>
      </div>
    </>
  );
};
