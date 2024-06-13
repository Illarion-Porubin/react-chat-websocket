import { useNavigate } from "react-router-dom";
import s from "./Body.module.scss";
import { Socket } from "socket.io-client";

interface Props {
  socket: Socket
}


export const Body:React.FC<Props> = ({socket}) => {
  const navigate = useNavigate();

  const handleLeave = () => {
    socket.emit("delete")
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <header className={s.header}>
        <button className={s.btn} onClick={handleLeave}>Покинуть чат</button>
      </header>
    </>
  );
};
