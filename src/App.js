import React, { useState, useRef } from 'react';
import './App.css';
import { Auth } from './components/Auth';

// component imports
import { Chat } from './components/Chat';

// cookie imports
import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }

  return (
    <div>
      {room ? (
        <Chat />
      ) : (
          <div className="room">
            <label>Enter Room Name:</label>
            <input ref={roomInputRef}/>
            <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
          </div>
        )}
    </div>
  )
}

export default App;
