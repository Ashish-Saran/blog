import React from "react";
import { FallingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <FallingLines
      color="#1e62d0"
      width="100"
      visible={true}
      ariaLabel="falling-lines-loading"
    />
  );
};

export default Loader;
