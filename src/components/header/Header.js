import React from "react";
import Logo from "../../assets/logo.png";
import User from "../../assets/user.jpg";
import { signOut } from "firebase/auth/cordova";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={Logo} alt="logo" />
      {user && <div className="flex p-2">
        <img className="w-12 h-12" src={user.photoURL || User} alt="usericon" />
        <button onClick={handleSignOut} className="font-bold text-white">
          (Sign Out)
        </button>
      </div>}
    </div>
  );
};
