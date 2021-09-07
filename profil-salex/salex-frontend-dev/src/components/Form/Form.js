import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Form.css";
function Form() {
  const [content, setContent] = useState({
    name: {
      label: "Ismingizni kiriting",
      placeholder: "Ismingiz",
      type: "text",
      useType: "name",
      value: "",
    },
    email: {
      label: "Email pochta",
      placeholder: "Email",
      type: "email",
      useType: "email",
      value: "",
      eye: "",
    },
    phone: {
      label: "Telefon raqam",
      placeholder: "Raqamingiz",
      type: "tel",
      useType: "tel",
      maxLength: "13",
      pattern: "[0-9 +]{13}",
      value: "",
      eye: "",
    },
    password: {
      label: "Parol kiriting",
      placeholder: "Parol",
      type: "password",
      useType: "password",
      value: "",
      minLength: "8",
      eye: "onn",
    },
  });

  const valueHandler = (e, key) => {
    const obj = { ...content };
    obj[key].value = e.target.value;
    setContent(obj);
  };

  const contentList = [];
  for (let key in content) {
    contentList.push({
      key,
      config: content[key],
    });
  }
  const btnHandler = (e) => {
    e.preventDefault();
    contentList.forEach(({ key, config }) => {
      if (config.value === "") {
        let res = { ...content };
        res[key].class = "no-completed";
        res[key].class2 = "no-completed-text";
        setContent(res);
      } else {
        let res = { ...content };
        res[key].class = "";
        res[key].class2 = "";
        setContent(res);
      }
    });
    console.log(contentList);
  };
  const changeEye = () => {
    if (content.password.eye === "off" && content.password.type === "text") {
      let res = { ...content };
      res.password.eye = "onn";
      res.password.type = "password";
      setContent(res);
    } else {
      let res = { ...content };
      res.password.eye = "off";
      res.password.type = "text";
      setContent(res);
    }
  };
  const showContent = contentList.map(({ key, config }) => (
    <div key={key}>
      <label className="input-label" htmlFor={config.useType}>
        {config.label}
      </label>
      <p class={"d-none " + config.class2}>
        {config.placeholder}ni kiriting !{" "}
      </p>
      <div className="input-cont">
        <input
          id={config.useType}
          className={"form-input " + config.class}
          type={config.type}
          name={config.useType}
          pattern={config.pattern}
          maxLength={config.maxLength}
          onChange={(e) => valueHandler(e, key)}
          placeholder={config.placeholder}
          value={config.value}
          minLength={config.minLength}
        />
        <FontAwesomeIcon
          onClick={changeEye}
          className="eye-icon"
          icon={
            config.eye === "onn"
              ? faEye
              : config.eye === "off"
              ? faEyeSlash
              : ""
          }
        />
      </div>
    </div>
  ));
  return (
    <div className="forms">
      <form onSubmit={btnHandler} className="form">
        {showContent}
        <p className="remember-me">Meni eslash</p>
        <div className="btn-confirmation">
          <button type="submit" className="confirmation">
            Tasdiqlash
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
