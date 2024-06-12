import { Socket } from "socket.io-client";
import { Sidebar } from "../../components/Chat/components/Slider/Sidebar";
import { MessageBlock } from "../../components/Chat/components/Message/MessageBlock";
import { Body } from "../../components/Chat/components/Body/Body";
import s from "./styles.module.css";


interface Props {
  socket: Socket;
}

export const Chat: React.FC<Props> = ({ socket }) => {
  return (
    <>
      <div className={s.chat}>
        <Sidebar/>
        <main className={s.main}>
          <Body/>
          <MessageBlock/>
        </main>
      </div>
    </>
  );
};
