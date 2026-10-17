import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [toggleSingIn, setTogglesignIn] = useState(true);
  const toggleSiginandsignup = () => {
    setTogglesignIn(!toggleSingIn);
  };
  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6e4b7575-5e77-4cbc-b380-6b57b4cb2652/web/PL-en-20261012-TRIFECTA-perspective_f3e4e3e1-52da-422a-9119-d04c21621bcd_large.jpg"
        alt="back-img"
        className="absolute"
      />
      <form className="bg-black absolute top-1/2 left-1/2 max-w-md w-full -translate-x-1/2 -translate-y-1/2 p-6 shadow-md rounded-lg text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-2">
          {toggleSingIn ? "Sign In" : "Sign Up"}
        </h1>
        {!toggleSingIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 border-gray-50 w-full rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-2 my-2 border-gray-50 w-full rounded-md"
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 my-2 border-gray-50 w-full rounded-md"
        />
        <button className="p-2 my-2 bg-red-700 w-full rounded-md">
          {toggleSingIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 my-2 cursor-pointer" onClick={toggleSiginandsignup}>
          {toggleSingIn
            ? " Not registered? Sign Up"
            : "Already registerd... Please Sign In!!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
