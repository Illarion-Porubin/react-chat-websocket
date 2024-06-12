import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Socket } from "socket.io-client";
import s from "./styles.module.css";

interface Props {
  socket: Socket;
}

export const Home: React.FC<Props> = ({ socket }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(true);
    localStorage.setItem("user", user);
    return navigate("/chat");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Вход в чат</h2>
        <label htmlFor="user"></label>
        <input
          type="text"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button>Войти</button>
      </form>
    </>
  );
};
