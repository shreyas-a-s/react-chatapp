import { useEffect, useState } from "react";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from "firebase/firestore";
import { auth, db } from "../firebase-config";

// css
import "../styles/Chat.css";

export const Chat = (props) => {
  const { room } = props;

  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");
  const [messages, setMessages] = useState([]);

  useEffect (() => {
    const queryMessages = query(messagesRef, where("room", "==", room), orderBy("createdAt"))
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id })
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room: room // you can also use just 'room' instead of 'room: room'
    });
  }

  return <div className="chat-app">
    <div className="header">
      <h1>Welcome to: {room}</h1>
    </div>
    <div className="messages">
      {messages.map((message) => (
        <div className="message" key={message.id}>
          <span className="user">{message.user}</span>
          {message.text}
        </div>
      ))}
    </div>
    <form onSubmit={handleSubmit} className="new-message-form">
      <input
        className="new-message-input"
        placeholder="Type your message here..."
        onChange={(e) => setNewMessage(e.target.value)}
        value={newMessage}
      />
      <button type="submit" className="send-button">Send</button>
    </form>
  </div>;
}
