import React from "react";
import "./custom-button.styles.scss";
//import { CustomButtonContainer } from "./custom-button.styles";

//This its the way it was before the styles-components library
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "isGoogleSignIn" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

/** const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);*/

export default CustomButton;
