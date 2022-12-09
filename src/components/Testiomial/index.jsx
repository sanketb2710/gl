import { Box, Center } from '@chakra-ui/react';
import ReviewCard from 'components/ReviewCard';
import React from 'react';
import EmblaCarousel from 'components/EmblaCarousel/EmblaCarousel';

const Testimonial = () => {
  const slides = [1, 2, 3, 4, 5, 6];
  return (
    <Box className=" bg-davyGrey py-16 mt-24 px-3.75 md:px-7.5 ">
      <Center mb={32}>
        <p className=" text-tealBlue900 font-extrabold  text-2xl md:text-4xl">
          Happy Customers
        </p>
      </Center>
      <EmblaCarousel
        carouselType="testimonial"
        direction="x"
        show={true}
        play={false}
      >
        <div className=" embla__container">
          {slides.map(index => (
            <div className={'embla__slide'} key={index}>
              <div className="embla__slide__inner">
                <ReviewCard />
              </div>
            </div>
          ))}
        </div>
      </EmblaCarousel>
    </Box>
  );
};

export default Testimonial;
