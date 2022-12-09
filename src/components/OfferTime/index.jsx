import React from 'react';

const OfferTime = ({ number, text }) => {
  return (
    <div className="flex items-baseline">
      <p className=" text-2xl font-bold text-aquaBlue600 mx-1">{number}</p>
      <p className=" text-xs font-normal text-tealBlue600">{text}</p>
    </div>
  );
};

export default OfferTime;
