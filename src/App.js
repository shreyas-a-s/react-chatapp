import React, { useState } from 'react';
import './App.css';
import { Auth } from './components/Auth';

// cookie imports
import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))

  if (!isAuth) {
    return (
      <div>
        <Auth />
      </div>
    );
  }
}

export default App;
