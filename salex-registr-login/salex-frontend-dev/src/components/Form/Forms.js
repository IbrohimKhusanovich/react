import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Field, Form } from "formik";
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
    const [eyeIcon, setEyeIcon] = useState('off')
    const changeEye=()=>{
if(eyeIcon==='off'){
  setEyeIcon('onn')
}
else{
  setEyeIcon('off')
}
    }
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
            <Input type={eyeIcon==='off'?'password':'text'} name='password' label='Parol kiriting' />
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
                <Button type='submit'>{signUp?'Kirish':'Tadiqlash'}</Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

{
  /* <div class="Form_forms__1SuT8"><form><div><div class="Form_inputBox__1sqev"><div class="Input_inputBar__3kbwC"><label for="text">Ismingizni kiriting</label><input type="text" id="name" placeholder="Ismingiz" autocomplete="nope" class="Input_Input__evKft undefined" value=""></div></div><p class="Form_displayNon__3eFe- + undefined">Ismingizni kiriting ! </p></div><div><div class="Form_inputBox__1sqev"><div class="Input_inputBar__3kbwC"><label for="text">Email pochta</label><input type="text" id="email" placeholder="Email" autocomplete="nope" class="Input_Input__evKft undefined" value=""></div></div><p class="Form_displayNon__3eFe- + undefined">Emailni kiriting ! </p></div><div><div class="Form_inputBox__1sqev"><div class="Input_inputBar__3kbwC"><label for="text">Telefon raqam</label><input type="text" id="tel" placeholder="Raqamingiz" pattern="[0-9 +]{13}" maxlength="13" autocomplete="nope" class="Input_Input__evKft undefined" value=""></div></div><p class="Form_displayNon__3eFe- + undefined">Raqamingizni kiriting ! </p></div><div><div class="Form_inputBox__1sqev"><div class="Input_inputBar__3kbwC"><label for="password">Parol kiriting</label><input type="password" id="password" placeholder="Parol" minlength="8" autocomplete="nope" class="Input_Input__evKft undefined" value=""></div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" class="svg-inline--fa fa-eye fa-w-18 Form_eyeIcon__kHlop" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg></div><p class="Form_displayNon__3eFe- + undefined">Parolni kiriting ! </p></div><a class="Form_rememberMe__FwGRr" href="/register">Meni Eslash</a><div class="Form_btnConfirmation__wR_yF"><div><button class="Button_btn__2x-e6">Tasdiqlash</button></div></div></form></div> */
}
