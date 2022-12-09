import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import img1 from 'assets/images/img1.png';
import img2 from 'assets/images/img2.png';
import img3 from 'assets/images/img3.png';
import img4 from 'assets/images/img4.png';

import share from 'assets/icons/Share.svg';
import { Image } from '@chakra-ui/react';
import Magnify from 'components/Magnify/magnify';
import ImageMagnify from 'components/Magnify/imageMagnify';
import BreadCrumb from 'components/BreadCrumb';

const ProductImageSection = () => {
  return (
    <React.Fragment>
      <Box className={`h-[780px] w-full flex items-start relative`}>
        <Image src={img1} />
        {/* <Magnify img={img1} /> */}

        {/* <ImageMagnify image={img1} /> */}
        <Box className="absolute hidden mobile_md:block">
          <BreadCrumb />
        </Box>
        <Image src={share} className="absolute right-0" />
      </Box>
      <Flex className="mt-2 gap-[6px] flex-wrap">
        <Image src={img2} />
        <Image src={img3} />
        <Image src={img4} />
      </Flex>
    </React.Fragment>
  );
};

export default ProductImageSection;
