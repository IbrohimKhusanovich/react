import React from "react";
import classes from "./Login.module.css";
import logo from "../../assets/salex-logo.svg";

import { Link } from "react-router-dom";
import Forms from "../../components/Form/Forms";
function Login() {
  return (
    <div className={classes.register}>
      <div className={classes.navbar}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.container}>
        <div className={classes.linearHeader}>
          <h1>Ro’yxatdan o’ting va bepul E’lon bering</h1>
        </div>
        <div className={classes.formPanel}>

          <Forms signUp={true} />
        </div>
      </div>
    </div>
  );
}

export default Login;
