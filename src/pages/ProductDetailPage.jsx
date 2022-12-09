import React, { useState } from 'react';
import Layout from 'components/Layout';
import MayLikeContainer from 'components/MayLikeContainer';
import SizeSelection from 'components/SizeSelection';
import ColorSelection from 'components/ColorSelection';
import BuySection from 'components/BuySection';
import { Flex, Box } from '@chakra-ui/react';
import img1 from 'assets/images/img1.png';
import ProductImageSection from 'components/ProductImageSection';
import ProductSelection from 'components/ProductSelection';
import AccordionSection from 'components/AccordionSection';
import Magnify from 'components/Magnify/magnify';
import ProductDetailSlider from 'components/ProductDetailSlider';
import ScrollToTop from 'components/atoms/ScrollToTop';
import BreadCrumb from 'components/BreadCrumb';
import ProductMobileSlider from 'components/ProductMobileSlider';
import ShoppingCartMenu from 'components/ShoppingCartMenu';

const ProductDetailPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const colors = [
    '#697586',
    '#F19100',
    '#5288B8',
    '#EEF2F6',
    '#115B40',
    '#437A94',
    '#1B2969',
    '#AEAEAE',
    '#D8DB47',
    '#1B2969',
    '#C93054',
    '#69371B',
    '#EB9975',
    '#9A64AD',
  ];
  const addToCart = () => {
    setShowMenu(!showMenu);
  };
  return (
    <Layout>
      <Flex className=" justify-between flex-row ">
        {/* max-w-[925px] */}
        <Box className="hidden mobile_md:block max-w-[500px] laptop:max-w-[725px] md_xl:max-w-[925px] border-r-tealBlue100 border-r-[1px]">
          <ProductImageSection />
          <Box className="pl-11 pt-10">
            <AccordionSection />
            <MayLikeContainer />
          </Box>

          {/* <Magnify /> */}
        </Box>
        {/* max-w-[515px] */}
        <Box className=" mobile:max-w-[350px] tablet:max-w-[410px] laptop:max-w-[515px] px-4  mobile_md:pl-6 mobile_md:pr-20 overflow-hidden ">
          <ShoppingCartMenu addToCart={addToCart} showMenu={showMenu} />
          <Box className="block mobile_md:hidden  mt-4 mb-4 mobile_md:mt-0 mobile_md:mb-0">
            <BreadCrumb />
          </Box>
          <ProductSelection />
          <ColorSelection colors={colors} />
          <SizeSelection />
          <Box className=" block mobile_md:hidden">
            <AccordionSection />
            <MayLikeContainer />
          </Box>
          <BuySection AddToCart={addToCart} />
        </Box>
      </Flex>
      <ScrollToTop />
    </Layout>
  );
};

export default ProductDetailPage;
