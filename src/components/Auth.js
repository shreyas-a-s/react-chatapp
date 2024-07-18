// firebase imports
import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth"

export const Auth = () => {
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result)
  }

  return (
    <div className="auth">
      <p>Sign in With Google to Continue</p>
      <button onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
  );
}
