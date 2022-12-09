import CouponSection from 'components/CouponSection';
import React from 'react';

const PaymentSection = () => {
  return (
    <div>
      <p className=" mt-10 text-2xl text-tealBlue900 font-extrabold">Payment</p>
      <CouponSection applied={true} type="address" />
    </div>
  );
};

export default PaymentSection;
