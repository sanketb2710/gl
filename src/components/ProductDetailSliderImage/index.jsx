import React, { useEffect } from 'react';
import { useState } from 'react';
const ProductDetailSliderImage = ({ image, id, selected, setSelected }) => {
  const clickHandler = e => {
    e.preventDefault();
    setSelected(e.target.id);
  };

  return (
    <div
      className={
        id === Number(selected)
          ? 'border-tealBlue900 w-16 h-16 border-[1px] overflow-hidden cursor-pointer rounded-lg'
          : `w-16 h-16 border-[1px]  overflow-hidden cursor-pointer 
           border-tealBlue100  rounded-lg`
      }
    >
      <img
        onClick={e => clickHandler(e)}
        id={id}
        src={image}
        className=" w-full h-full object-cover"
      />
    </div>
  );
};

export default ProductDetailSliderImage;
