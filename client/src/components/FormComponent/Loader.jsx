import React from "react";
import { useEffect } from "react";
import { SpinningCircleLoader,GooeyLoader1 } from "react-loaders-kit";

function Loader() {
 
  const loaderProps = {
    loading: true,
    size: 45,
    duration: 5,
    colors: ['#D100F3', '#ffffff'],
    
  };

  return (
    <div
      className="loader"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "163px",
        height:"100%",
        flexGrow: 1,
      }}
    >
      <SpinningCircleLoader {...loaderProps} />
      <div className="progress">Please Wait</div>
    </div>
  );
}

export { Loader };