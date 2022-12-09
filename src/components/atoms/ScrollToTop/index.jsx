import React from 'react';
import scrollChev from 'assets/icons/toTopChevron.svg';
import { Image } from '@chakra-ui/react';

const ScrollToTop = () => {
  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className=" flex flex-col items-end pb-16 pr-[83px]">
      <Image
        src={scrollChev}
        className=" cursor-pointer"
        onClick={clickHandler}
      />
      <p className=" text-base text-tealBlue500 font-medium">To Top</p>
    </div>
  );
};

export default ScrollToTop;
