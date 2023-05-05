import React from "react";

const GridItem = ({ src }) => {
  return (
    <div className="grid-item">
      <img
        src={src}
        alt=""
        style={{ width: "100%", height: "100vh", display: "block" }}
      />
    </div>
  );
};

export default GridItem;
