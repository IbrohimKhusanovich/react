import React from "react";
//login blan registr ning dizayni bir hil bo'lgani uchun bitta faylga yozib qoyurdim style ni
import classes from "../Login/Login.module.css";
import logo from "../../assets/salex-logo.svg";
import Forms from "../../components/Form/Forms";
function Register() {
  return (
    <div className={classes.register}>
      <div className={classes.navbar}>
        <img src={logo} alt='logo' />
      </div>
      <div className={classes.container}>
        <div className={classes.linearHeader}>
          <h1>Ro’yxatdan o’ting va bepul e’lon bering</h1>
        </div>
        <div className={classes.formPanel}>
          <Forms signUp={false} />
        </div>
      </div>
    </div>
  );
}

export default Register;
