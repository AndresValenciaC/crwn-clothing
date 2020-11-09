import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

/**Higer order component returns back a new functional component,WithSpinner its a fucntion
 * that takes or wraps andWrappedComponent acording to the params
 * are two diferents components */

/** Highter order component its a function that gets a component and return a new enhance component */

// WithSpinner its use to wait for Asynchronos data while fetching from back Db

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
