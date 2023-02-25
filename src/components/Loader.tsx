import React from "react";
import { Triangle } from "react-loader-spinner";

function Loader() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-black">
      <div className="w-48 h-48">
        <Triangle
          height="full"
          width="full"
          color="rgb(8 145 178)"
          ariaLabel="triangle-loading"
        />
      </div>
    </div>
  );
}

export default Loader;
