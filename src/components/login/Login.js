import React, { useRef, useState } from "react";
import { Header } from "../header/Header";
import cover from "../../assets/cover.jpg";
import { validateData } from "../../utils/validation";

export const Login = () => {
  const [isSignInForm, setIsSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInFrom(!isSignInForm);
  };

  const handleSubmit = () => {
    const message = validateData(name.current.value, email.current.value, password.current.value );
    setErrorMessage(message);
  };
  return (
    <div>
      <Header />
      <div>
        <img className="absolute" src={cover} alt="cover-photo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute my-36 mx-auto right-0 left-0 p-12 bg-black text-white w-3/12 rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign Up" : "Login In"}
        </h1>
        {isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign Up" : "Login In"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "Already a user? Login in Now"
            : "New to Netflix? Signup Now"}
        </p>
      </form>
    </div>
  );
};
