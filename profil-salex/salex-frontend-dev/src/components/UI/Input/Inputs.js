import classes from "./Input.module.css";

import {ErrorMessage, useField } from "formik";
export const Input = ({
  label,...props}) => {
    const [field,meta]=useField(props);
    let bool=meta.error===ErrorMessage?'1px solid tomato':''
    console.log(meta.touched);
  return (
    <div className={classes.inputBar}>
      <label htmlFor='name'>{label}</label>
      <input
       type='text'
        className={classes.Input}
        style={{border:bool}}
        {...field} {...props}
        autoComplete='off'
      />
     <p style={{color:'tomato'}} className={classes.error}> <ErrorMessage  name={field.name}/> </p>
    </div>
  );
};
