import React from "react";

import { Triangle } from "react-loader-spinner";

const Loader = ({ big }) => {
  return (
    <div
      className={big ? "loader-spinner loader-spinner--big" : "loader-spinner"}
    >
      <Triangle
        height="200"
        width="200"
        color="#b7974f"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
