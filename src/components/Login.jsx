import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/userSlice";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleClickBtn = () => {
    const emailValue = email.current?.value || "";
    const passwordValue = password.current?.value || "";
    const nameValue = isSignInForm ? null : name.current?.value || "";

    const message = checkValidate(emailValue, passwordValue, nameValue);
    setErrorMsg(message);

    if (message) return;

    //singIn or SignUp
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                loginSuccess({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              console.log(error);
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("signed in", user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6e4b7575-5e77-4cbc-b380-6b57b4cb2652/web/PL-en-20261012-TRIFECTA-perspective_f3e4e3e1-52da-422a-9119-d04c21621bcd_large.jpg"
        alt="back-img"
        className="absolute"
      />
      <form
        onClick={(e) => e.preventDefault()}
        className="bg-black absolute top-1/2 left-1/2 max-w-md w-full -translate-x-1/2 -translate-y-1/2 p-6 shadow-md rounded-lg text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 bg-gray-700 w-full rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 my-2 bg-gray-700 w-full rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 bg-gray-700 w-full rounded-md"
        />
        <p className="text-red-600 font-bold text-lg py-2">
          {" "}
          {errorMsg ? errorMsg : null}
        </p>
        <button
          className="p-2 my-2 bg-red-700 w-full rounded-md"
          onClick={handleClickBtn}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 my-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? " Not registered? Sign Up"
            : "Already registerd... Please Sign In!!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
