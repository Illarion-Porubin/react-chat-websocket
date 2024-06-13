import React from "react";
import s from "./MessageBlock.module.scss";
import { Socket } from "socket.io-client";

interface Props {
  socket: Socket;
}

export const MessageBlock:React.FC<Props> = ({socket}) => {
  const [message, setMessage] = React.useState('');
  

  const handleSend = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(message.trim() && localStorage.getItem('user')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('user'),
        id: `${socket.id}-${Math.random()}`,
        socketID: socket.id
      })
    }
    setMessage('')
  }

  const isTyping = () => socket.emit('typing', `${localStorage.getItem('user')}  is typing`)

  return (
    <div className={s.message_block}>
        <form className={s.form} onSubmit={handleSend}>
          <input
            type="text" 
            className={s.user_message}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={isTyping}
          />
          <button className={s.btn}>Сказать</button>
        </form>
    </div>
  )
}
