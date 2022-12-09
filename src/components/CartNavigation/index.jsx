import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import circleFill from 'assets/icons/check-filled-circle.svg';
import line from 'assets/icons/cartNavLine.svg';
const CartNavigation = ({ type }) => {
  return (
    <Box
      className={` flex items-center ${
        type == 'mobile' ? 'bg-tealBlue900 p-6 max-w-full ' : 'max-w-[380px]'
      } `}
    >
      <span className="flex items-center">
        {type == 'mobile' ? (
          <span
            className={`  w-[18px] h-[18px] mx-3 rounded-full border-[2px] font-extrabold  ${
              type == 'mobile'
                ? 'text-milkyWhite2 border-milkyWhite2'
                : 'text-tealBlue700 border-tealBlue700'
            }  text-sm text-center flex justify-center items-center`}
          >
            1
          </span>
        ) : (
          <Image src={circleFill} className="px-3" />
        )}
        <p
          className={`text-base font-medium ${
            type == 'mobile' ? 'text-milkyWhite2' : 'text-tealBlue600'
          } `}
        >
          Cart
        </p>
      </span>
      <Image src={line} />
      <span className="flex items-center">
        <span
          className={`  w-[18px] h-[18px] mx-3 rounded-full border-[2px] font-extrabold  ${
            type == 'mobile'
              ? 'text-milkyWhite2 border-milkyWhite2'
              : 'text-tealBlue700 border-tealBlue700'
          }  text-sm text-center flex justify-center items-center`}
        >
          2
        </span>
        {/* <Image src={circleFill} /> */}
        <p
          className={`text-base font-medium ${
            type == 'mobile' ? 'text-milkyWhite2' : 'text-tealBlue600'
          } `}
        >
          Address
        </p>
      </span>

      <Image src={line} />
      <span className="flex items-center">
        <span
          className={`  w-[18px] h-[18px] mx-3 rounded-full border-[2px] font-extrabold  ${
            type == 'mobile'
              ? 'text-milkyWhite2 border-milkyWhite2'
              : 'text-tealBlue700 border-tealBlue700'
          }  text-sm text-center flex justify-center items-center`}
        >
          3
        </span>
        {/* <Image src={circleFill} /> */}
        <p
          className={`text-base font-medium ${
            type == 'mobile' ? 'text-milkyWhite2' : 'text-tealBlue600'
          } `}
        >
          Payment
        </p>
      </span>
    </Box>
  );
};

export default CartNavigation;
