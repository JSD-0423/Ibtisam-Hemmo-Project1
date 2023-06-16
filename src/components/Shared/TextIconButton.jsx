import React from "react";
import { Button } from "react-bootstrap";

const TextIconButton = ({
  buttonClassName,
  iconClassName,
  iconId,
  iconName,
  buttonSpanText,
  buttonSpanId,
  spanClassName,
  buttonFunction,
}) => {
  return (
    <Button
      className={buttonClassName}
      type="button"
    >
      <ion-icon
        class={iconClassName}
        id={iconId}
        name={iconName}
        aria-hidden="true"
        role="img"
      ></ion-icon>
      <span id={buttonSpanId} className={spanClassName}>
        {buttonSpanText}
      </span>
    </Button>
  );
};

export default TextIconButton;
