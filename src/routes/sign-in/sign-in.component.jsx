import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  singnInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

const SignIn = () => {
  useEffect(() => {
    const googleRedirect = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
        // console.log(response);
      }
    };
    googleRedirect();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1> Sign In Page </h1>
      <button onClick={logGoogleUser}>Sing In with Google Popup</button>
      <button onClick={singnInWithGoogleRedirect}>
        Sing In with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
