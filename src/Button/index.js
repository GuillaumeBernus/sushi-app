import React from "react";
import { bool, func } from "prop-types";

import { BlueButton } from "./styles";

export default function Button({ onClick, secondary, children }) {
  return (
    <BlueButton secondary={secondary} onClick={onClick}>
      {children}
    </BlueButton>
  );
}

Button.propTypes = {
  onClick: func.isRequired,
  secondary: bool,
};

Button.defaultProps = {
  secondary: false,
};
