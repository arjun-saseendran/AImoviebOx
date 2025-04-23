import React, { useState } from "react";
import { Header } from "../header/Header";
import cover from "../../assets/cover.jpg";

export const Login = () => {
  const [isSignInForm, setIsSignInFrom] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInFrom(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img className="absolute" src={cover} alt="cover-photo" />
      </div>
      <form className="absolute my-36 mx-auto right-0 left-0 p-12 bg-black text-white w-3/12 rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign Up" : "Login In"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
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
