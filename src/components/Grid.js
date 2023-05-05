import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import GridItem from "./GridItem";

const Grid = ({ photos }) => {
  return (
    <div className="grid">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="4px">
          {photos.map((photo, index) => (
            <GridItem key={index} src={photo} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Grid;
