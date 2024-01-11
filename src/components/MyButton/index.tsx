import React from "react";
import { ButtonProps } from "src/components/MyButton/index.interface";
import styles from "src/components/MyButton/index.module.css";

// See how to implement ...rest parameters type in the interface.
function MyButton({ children, onClick, style, type }: ButtonProps) {
  if (type === "fill") {
    return (
      <div style={style} onClick={onClick} className={styles["fill-container"]}>
        {children}
      </div>
    );
  }
  return (
    <div style={style} onClick={onClick} className={styles["container"]}>
      {children}
    </div>
  );
}

export { MyButton };
