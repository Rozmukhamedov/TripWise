import React, { FC } from "react";
import classes from "./style.module.css";

type CheckboxProps = {
  label?: string;
  id?: number | string;
  onChange?: any;
  onSale?: any;
  setOnSale?: any;
};

const Checkbox: FC<CheckboxProps> = ({ label, onSale, setOnSale }) => {
  return (
    <div className={classes.check_box}>
      <label className={classes.check_box_label}>
        <input
          type="checkbox"
          checked={onSale}
          onChange={() => setOnSale(!onSale)}
        />
        <span className={classes.checkmark}></span>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
