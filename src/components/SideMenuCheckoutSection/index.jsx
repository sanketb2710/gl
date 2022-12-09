import React from 'react';
import { Box, Button, Checkbox, Image } from '@chakra-ui/react';
import VisaSection from 'components/VisaSection';
import SubtotalSection from 'components/SubtotalSection';
import exclamatory from 'assets/icons/exclamatory.svg';
import CustomCheckbox from 'components/atoms/CustomCheckBox';
import CouponSection from 'components/CouponSection';
import { useState } from 'react';

const SideMenuCheckoutSection = ({ type }) => {
  const [showCouponModal, setShowCouponModal] = useState(false);
  const changeCouponModal = () => {
    setShowCouponModal(!showCouponModal);
  };
  // showCouponModal, changeCouponModal
  return (
    <Box
      className={`w-full px-4 ${
        type === 'mainCart' ? 'max-w-[630px]' : 'fixed max-w-[500px]'
      } bottom-0 `}
    >
      {type === 'mainCart' ? (
        <CouponSection
          showCouponModal={showCouponModal}
          changeCouponModal={changeCouponModal}
        />
      ) : (
        ''
      )}
      {type === 'mainCart' ? <SubtotalSection /> : ''}
      <Box className="flex justify-between border-t-[1px] border-tealBlue400 text-tealBlue800 py-4 font-bold text-xl">
        {type === 'mainCart' ? <p>Total</p> : <p>Subtotal</p>}
        <p>$16.75</p>
      </Box>
      {type === 'mainCart' ? (
        <>
          <span className="flex mb-8">
            <p className=" text-sm font-normal text-tealBlue500">
              *Shipping & Taxes calculated at checkout
            </p>
            <Image src={exclamatory} />
          </span>
          <span className="flex mb-4">
            <CustomCheckbox>
              <p className=" text-sm font-normal text-tealBlue500">
                Apply shipping warranty $0.98
              </p>
            </CustomCheckbox>
          </span>
        </>
      ) : (
        ''
      )}
      <Button
        className={`" text-milkyWhite2 bg-tealBlue900 py-[18px] ${
          type === 'mainCart' ? 'w-full max-w-[612px]' : 'w-full max-w-[468px]'
        } rounded-lg font-extrabold text-base"`}
      >
        Checkout
      </Button>
      {type === 'mainCart' ? (
        <Box className="mt-8">
          <VisaSection />
        </Box>
      ) : (
        <p className=" text-tealBlue500 text-xs font-medium pt-4 text-center pb-6">
          Shipping & Taxes will be calculated on checkout
        </p>
      )}
    </Box>
  );
};

export default SideMenuCheckoutSection;
