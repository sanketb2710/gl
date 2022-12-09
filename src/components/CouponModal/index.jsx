import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Box,
  InputGroup,
  InputRightAddon,
  Input,
} from '@chakra-ui/react';
import CouponCodeCard from 'components/CouponCodeCard';

const CouponModal = ({ showCouponModal, changeCouponModal }) => {
  return (
    <>
      <Modal
        blockScrollOnMount={true}
        isOpen={showCouponModal}
        onClose={changeCouponModal}
      >
        <ModalOverlay className=" bg-tealBlue400 bg-opacity-50" />
        <ModalContent className="items-end h-screen overflow-y-scroll">
          <div className="w-[576px] flex flex-col relative z-50 bg-white">
            <Box className=" flex  justify-between px-4 py-[26px] border-[1px] border-tealBlue100 ">
              <p className=" text-lg font-extrabold text-tealBlue900 uppercase">
                Apply Coupon
              </p>
              <ModalCloseButton className=" text-tealBlue400" />
            </Box>
            <InputGroup className="px-8 mt-4">
              <Input
                placeholder="Please enter coupon code"
                className="rounded-lg w-full max-w-[399px] p-4 border-[1px] border-tealBlue200"
              />
              <InputRightAddon
                children="APPLY"
                className="bg-davyGrey text-aquaBlue600 px-[37px] font-extrabold text-sm rounded-lg p-4 border-[1px] border-tealBlue200"
              />
            </InputGroup>

            {/* <ProductEditContainer /> */}
            <Box className="bg-milkyWhite px-7.5 pt-[6px] mt-5 ">
              <p className=" font-extrabold text-lg text-tealBlue900">
                AVAILABLE COUPONS
              </p>
              <CouponCodeCard available={true} />
              <CouponCodeCard available={true} />
              <CouponCodeCard available={true} />
              <CouponCodeCard available={true} />
              <CouponCodeCard available={true} />
              <p className=" font-extrabold text-lg text-tealBlue900">
                UNAVAILABLE COUPONS
              </p>
              <CouponCodeCard available={false} />
              <CouponCodeCard available={false} />
              <CouponCodeCard available={false} />
              <CouponCodeCard available={false} />
              <CouponCodeCard available={false} />
              <CouponCodeCard available={false} />
            </Box>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CouponModal;
