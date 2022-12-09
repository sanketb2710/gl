import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import like from 'assets/icons/circledLike.svg';
import share from 'assets/icons/Share.svg';
import img2 from 'assets/images/img2.png';
import img3 from 'assets/images/img4.png';
import img4 from 'assets/images/img3.png';
import TransitionSider from 'components/CustomTransitionSlider';

const ProductMobileSlider = ({ image }) => {
  const imgArr = [img4, img2, img3];
  const imgBtnArr = [1, 2, 3];
  return (
    <Box className="relative mt-[6px] mobile_md:hidden">
      <TransitionSider imgArr={imgArr} imgBtnArr={imgBtnArr} type="banner" />
      {/* <Image src={image} /> */}
      <Box className="absolute top-6 right-[22px]">
        <Image src={like} />
        <Image src={share} className=" mt-4" />
      </Box>
    </Box>
  );
};

export default ProductMobileSlider;
