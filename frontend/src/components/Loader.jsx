import React from "react";
import { FallingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <FallingLines
      color="#33a9b0"
      width="100"
      visible={true}
      ariaLabel="falling-lines-loading"
    />
  );
};

export default Loader;
