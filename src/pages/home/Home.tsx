import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Socket } from "socket.io-client";

interface Props {
  socket: Socket;
}

export const Home: React.FC<Props> = ({ socket }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("user", user);
    socket.emit('newUser', {user, socketID: socket.id})
    navigate("/chat");
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
