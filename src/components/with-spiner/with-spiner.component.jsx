import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

/**Higer order component returns back a new functional component,WithSpinner its a fucntion
 * that takes or wraps andWrappedComponent acordinf to the params
 * are two diferents components */

const WithSpinner = (WrappedComponent) => ({ isloading, ...otherParams }) => {
  return isloading ? (
    <SpinnerContainer>
      <SpinnerOverlay />
    </SpinnerContainer>
  ) : (
    <WrappedComponent {...otherParams} />
  );
};

export default WithSpinner;
