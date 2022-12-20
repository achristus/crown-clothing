import {
  signInWithGooglePopup,
  singnInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUser = async () => {
    const { user } = await singnInWithGoogleRedirect();
    console.log(user);
  };

  return (
    <div>
      <h1> Sign In Page </h1>
      <button onClick={logGoogleUser}>Sing In with Google Popup</button>
      <button onClick={logGoogleRedirectUser}>
        Sing In with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
