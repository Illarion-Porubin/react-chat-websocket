import { io } from "socket.io-client";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Chat } from "./pages/chat/Chat";



const socket = io("http://localhost:5000", {
  withCredentials: true,
});

  
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home socket={socket}/>} />
        <Route path="/chat" element={<Chat socket={socket}/>} />
      </Routes>
    </>
  )
}

export default App
