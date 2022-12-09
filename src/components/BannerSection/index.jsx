import React from 'react';
// import EmblaCarousel from 'components/EmblaCarousel/EmblaCarousel';
import BannerHero from 'assets/images/Banner_Hero.png';
import BannerHero1 from 'assets/images/Banner_Hero1.png';
import BannerHero2 from 'assets/images/Banner_Hero2.png';
// import { Box, Image } from '@chakra-ui/react';
import TransitionSider from 'components/CustomTransitionSlider';

// const BannerSection = () => {
//   const slides = [BannerHero1, BannerHero, BannerHero2];
//   return (
//     <EmblaCarousel
//       carouselType="hero"
//       slidesToScroll={1}
//       direction="y"
//       play={true}
//     >
//       {slides.map((item, index) => (
//         <div className={'embla__slideY'} key={index}>
//           <Image src={item} className="embla__slide__imgY" />
//           {/* {children} */}
//           {/* <img
//                 className="embla__slide__img"
//                 src={mediaByIndex(index)}
//                 alt="A cool cat."
//               /> */}
//         </div>
//       ))}
//       {/* <Box
//         background={`url(${BannerHero})`}
//         bgPosition="center"
//         bgRepeat="no-repeat"
//       /> */}
//     </EmblaCarousel>
//   );
// };

const BannerSection = () => {
  const imgArr = [BannerHero1, BannerHero, BannerHero2];
  const imgBtnArr = [1, 2, 3];
  return (
    <TransitionSider imgArr={imgArr} imgBtnArr={imgBtnArr} type="banner" />
  );
};

export default BannerSection;
