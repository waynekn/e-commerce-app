import {
  signInWitGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWitGooglePopup();
    console.log(user);
    createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1> Sign in form</h1>
      <button onClick={logGoogleUser}>Sign in with Google pop up</button>
    </>
  );
};

export default SignIn;
