import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Form } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../UI/Button/Buttons";
import { Input } from "../UI/Input/Inputs";
import * as yup from "yup";
import classes from "./Form.module.css";
export default function Forms({ signUp }) {
  const phoneRegex = RegExp(/^[+]{1}?[0-9]{12}?$/);
  const validate = yup.object({
    name: yup
      .string()
      .typeError("Bu yerda harflar bo'lishi kerak")
      .required("Ism kiritish shart"),
    tel: yup
      .string()
      .matches(phoneRegex, "Raqamni to'gri kiriting")
      .required("Raqam kiritish shart"),
    email: yup
      .string()
      .email("Email xato kiritilgan !")
      .required("Email kiritish shart"),
    password: yup
      .string()
      .min(8, "Parol kamida 8 ta bo'lishi kerak")
      .required("Parol kiritish shart"),

  });
  const [eyeIcon, setEyeIcon] = useState("off");
  const changeEye = () => {
    if (eyeIcon === "off") {
      setEyeIcon("onn");
    } else {
      setEyeIcon("off");
    }
  };
  return (
    <div className={classes.forms}>
      <Formik
        initialValues={{
          name: "",
          password: "",
          confirmPassword: "",
          email: "",
          tel: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validate}>
        {(formik) => (
          <Form>
            <div className={classes.inputBox}>
              <Input type='text' name='name' label='Ismingizni kiriting' />
              {signUp ? (
                ""
              ) : (
                <Input type='text' name='email' label='Email pochtangiz' />
              )}
              {signUp ? (
                ""
              ) : (
                <Input type='text' name='tel' label='Telefon raqamingiz' />
              )}
              <div className={classes.inputBox}>

                <Input
                  type={eyeIcon === "off" ? "password" : "text"}
                  name='password'
                  label='Parol kiriting'
                />
                <FontAwesomeIcon
                  onClick={changeEye}
                  className={classes.eyeIcon}
                  icon={
                    eyeIcon === "onn"
                      ? faEye
                      : eyeIcon === "off"
                      ? faEyeSlash
                      : ""
                  }
                />
              </div>

              {signUp ? (
                <Link className={classes.rememberMe} to='/register'>
                  Ro’yxatdan o’tish
                </Link>
              ) : (
                <Link className={classes.rememberMe} to='/'>
                  Meni eslash
                </Link>
              )}

              <div className={classes.btnConfirmation}>

                <Button type='submit'>{signUp ? "Kirish" : "Tadiqlash"}</Button>
              </div>
              <Link to='/' className={classes.goBack}>
                Ortga qaytish
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}