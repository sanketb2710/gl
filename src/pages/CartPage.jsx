import Layout from 'components/Layout';
import React from 'react';
import { Box } from '@chakra-ui/react';
import MyCartSection from 'components/MyCartSection';
import AddedCartItemBox from 'components/AddedCartItemBox';
import ProductCard from 'components/ProductCard';
import EmblaCarousel from 'components/EmblaCarousel/EmblaCarousel';
import CartNavigation from 'components/CartNavigation';
import UserCartInfo from 'components/UserCartInfo';
const CartPage = () => {
  const slides = [1, 2, 3, 4, 5, 67, 7, 8, 99];
  return (
    <Layout type="cart">
      <Box className="block mobile:hidden">
        <CartNavigation type="mobile" />
      </Box>
      <UserCartInfo />
      <Box className="bg-[#FFFF] mb-6  md:mb-0">
        <MyCartSection />
      </Box>
      <Box className="py-16 mt-24 px-3.75 hidden mobile:block mobile:px-7.5">
        <p className="uppercase mb-8 text-tealBlue900 font-extrabold text-2xl mobile:text-4xl">
          Recently Viewed
        </p>
        <EmblaCarousel
          carouselType="testimonial"
          direction="x"
          show={true}
          play={false}
        >
          <div className={'embla__container -ml-20'}>
            {slides.map(index => (
              <div className="pl-[5px] min-w-[20%] mobile_md:min-w-[33.33%] md_l:min-w-[25%] md_xl:min-w-[22%] relative">
                <ProductCard type="mainCart" />
              </div>
            ))}
          </div>
        </EmblaCarousel>
      </Box>
    </Layout>
  );
};

export default CartPage;
