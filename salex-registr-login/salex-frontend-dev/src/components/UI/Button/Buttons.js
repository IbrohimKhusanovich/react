import classes from "./Button.module.css";
import { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export const Button = ({ click, disabled, children, btnType, outlined }) => {
  return (
    <div>
      {btnType ? (
        <button
          disabled={disabled}
          onClick={click}
          type={btnType || "submit"}
          className={classes.btn}
        >
          {children}
        </button>
      ) : outlined ? (
        <button
          disabled={disabled}
          onClick={click}
          className={classes.btnOutlined}
        >
          {children}
        </button>
      ) : (
        <button disabled={disabled} onClick={click} className={classes.btn}>
          {children}
        </button>
      )}
    </div>
  );
};

export const SelectMenu = ({ children, defaultVal }) => {
  const [val, setVal] = useState(defaultVal);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => setVal(event.target.value);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  return (
    <FormControl>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={val}
        onChange={handleChange}
        disableUnderline={true}
      >
        {/* SelectMenu componentini yuklab olganingizda ichiga option o'rniga MenuItem bilan yozilada.
                Misol uchun:
                <SelectMenu>
                    <MenuItem></MenuItem>
                </SelectMenu> ko'rinishida*/}
        {children}
      </Select>
    </FormControl>
  );
};

export const Tag = ({ children }) => {
  return <span className={classes.Tag}>{children}</span>;
};
