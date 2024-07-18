// firebase imports
import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth"

// cookie imports
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Auth = () => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="auth">
      <p>Sign in With Google to Continue</p>
      <button onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
  );
}