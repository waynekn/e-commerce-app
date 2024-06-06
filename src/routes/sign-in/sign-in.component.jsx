import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1> Sign in form</h1>
      <button onClick={logGoogleUser}>Sign in with Google pop up</button>
      <SignUpForm />
    </>
  );
};

export default SignIn;
