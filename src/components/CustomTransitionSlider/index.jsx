import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
// import { DotButton } from 'components/EmblaCarousel/EmblaCarouselButtons';
import bnnerDot from 'assets/icons/bannerDot.svg';
import bnnerDotSelected from 'assets/icons/bnnerDotAfter.svg';

const TransitionSider = ({ imgArr, imgBtnArr, type }) => {
  //   const imgArr = [Adsection, Adsection1, Adsection2];
  //   const imgBtnArr = [adBtn, adBtn1, adBtn2];

  const [imgIndex, setImgIndex] = useState(0);
  // const [loop, setLoop] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [imgIndex]);

  imgIndex > 2 ? setImgIndex(0) : console.log(imgIndex, 'ImgIndex');

  const imageSelector = index => {
    setImgIndex(index.target.id);
  };

  return (
    <Box
      style={{
        backgroundImage: `url(${imgArr[imgIndex]})`,
      }}
      className="imgtrans h-[400px] mobile_md:h-[600px] bg-no-repeat bg-auto relative w-full"
    >
      {/* <img src={imgArr[imgIndex]} /> */}
      <Box
        className={
          type == 'banner'
            ? ' absolute bottom-[-5%] left-[45%]  md:bottom-2/4 md:left-[96%] md:w-[2%] '
            : 'absolute bottom-[-8%] md:bottom-[10%] left-0 w-full'
        }
        // position="absolute"

        //     bottom: -5%;
        // left: 22%;
        // width: 60%;
      >
        <Flex
          gap={14}
          className={
            type == 'banner' ? 'flex flex-row md:flex-col' : ' flex flex-row'
          }
          // direction={type == 'banner' ? 'column' : 'row'}
          justifyContent="center"
          alignItems="center"
        >
          {/* <Box className=" bg-white rounded-full overflow-hidden">
            <Image src={imgBtnArr[0]} />
          </Box>
          <Box className=" bg-white rounded-full overflow-hidden">
            <Image src={imgBtnArr[1]} />
          </Box> */}
          {imgBtnArr.map((item, index) => {
            return type == 'ad' ? (
              <Box
                key={index}
                className={`bg-white rounded-full overflow-hidden cursor-pointer ${
                  imgIndex == index
                    ? ' border-3 border-aquaBlue500 w-90px h-90px'
                    : 'w-20 h-20'
                }`}
              >
                <Image src={item} id={index} onClick={e => imageSelector(e)} />
              </Box>
            ) : (
              <Box
                key={index}
                className="cursor-pointer "
                // className={`bg-white rounded-full overflow-hidden w-80px cursor-pointer ${
                //   imgIndex == index ? ' border-3 border-aquaBlue500' : ''
                // }`}
              >
                <Image
                  src={imgIndex == index ? bnnerDotSelected : bnnerDot}
                  id={index}
                  onClick={e => imageSelector(e)}
                />
              </Box>
            );
          })}
        </Flex>
      </Box>
      {/* <img
        src={imgArr[imgIndex]}
        className="transition delay-75 ease-in-out "
      /> */}
    </Box>
  );
};

export default TransitionSider;
