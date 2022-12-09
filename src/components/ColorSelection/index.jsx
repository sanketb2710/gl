import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

const ColorSelection = ({ colors, gap }) => {
  const [colorIndex, setColorIndex] = useState();

  const colorHandler = colorI => {
    setColorIndex(colorI);
  };
  return (
    <Box>
      <h1 className=" text-tealBlue900 text-base font-extrabold uppercase mb-5">
        Colors
      </h1>
      <Flex
        className={`gap-[15px] mobile_md:gap-[${gap ? gap : '19px'}] flex-wrap`}
      >
        {colors.map((item, index) => {
          return (
            <Box
              key={index}
              borderColor={colorIndex == index ? item : 'white'}
              className="
                 border-[1px] cursor-pointer
               p-1 flex justify-center items-center rounded-full"
            >
              <Box
                key={index}
                id={index}
                backgroundColor={item}
                className=" h-8 w-8 rounded-full"
                onClick={e => colorHandler(e?.target?.id)}
              ></Box>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default ColorSelection;
