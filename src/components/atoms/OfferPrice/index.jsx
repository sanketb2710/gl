import React from 'react';

const OfferPrice = ({ price, offerPrice }) => {
  return (
    <span className="flex gap-1">
      <p className=" text-coralRed font-normal text-base line-through">
        ${price}
      </p>
      <p className=" text-tealBlue600 font-bold text-base">${offerPrice}</p>
    </span>
  );
};

export default OfferPrice;
