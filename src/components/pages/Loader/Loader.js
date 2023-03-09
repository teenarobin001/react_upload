import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div>
        <div className="overlay"></div>
      <div className="absolute text-center bg-white border">
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default Loader;
