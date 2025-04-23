import React from "react";
import { Header } from "../header/Header";
import cover from "../../assets/cover.jpg";

export const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <img src={cover} alt="cover-photo" />
      </div>
    </div>
  );
};
