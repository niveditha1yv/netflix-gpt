import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { loginSuccess, logout } from "../redux/userSlice";
import { Logo } from "../utils/contant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          loginSuccess({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browser");
        // ...
      } else {
        // User is signed out
        dispatch(logout());
        navigate("/");

        // ...
      }
    });

    // unSubscribe will be called when component unmount
    return () => unSubscribe();
  }, []);

  return (
    <div className="absolute z-10 px-8 py-4 w-screen bg-gradient-to-b from-black flex justify-between">
      <img className="w-48" src={Logo} alt="logo" />
      <div>
        {user && (
          <button
            className="font-bold bg-red-500 text-lg p-2 rounded-md text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
