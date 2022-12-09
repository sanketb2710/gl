import React from 'react';
import offerIcon from 'assets/icons/offerIcon.svg';
import offerChev from 'assets/icons/offerChev.svg';
import { Box, Image } from '@chakra-ui/react';
import CouponModal from 'components/CouponModal';
import capplied from 'assets/icons/capplied.svg';
import cancel from 'assets/icons/cancelCoupon.svg';

const CouponSection = ({
  applied,
  type,
  showCouponModal,
  changeCouponModal,
}) => {
  return (
    <Box
      className=" bg-tealBlue50 flex justify-between rounded-lg p-5"
      onClick={changeCouponModal}
    >
      {type === 'address' ? (
        ''
      ) : (
        <CouponModal
          showCouponModal={showCouponModal}
          changeCouponModal={changeCouponModal}
        />
      )}
      <div className="flex items-start">
        <Image src={applied == true ? capplied : offerIcon} />
        {applied == true ? (
          <p className=" text-greenTeal text-sm font-medium ml-3">
            Coupon “GEARLAUNCH25” applied!
          </p>
        ) : (
          <Box>
            <p className="uppercase text-lg text-tealBlue900 font-extrabold">
              Have a coupon ?
            </p>
            <p className=" pt-2 text-sm text-tealBlue600 font-medium">
              Get 25% off applying GEARLAUNCH25
            </p>
          </Box>
        )}
      </div>
      <Box className="flex items-center">
        {applied == true ? (
          <p className=" text-lg text-tealBlue900 font-bold mr-2">-$12.24</p>
        ) : (
          ''
        )}
        <Image src={applied == true ? cancel : offerChev} />
      </Box>
    </Box>
  );
};

export default CouponSection;
