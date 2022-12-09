import React from 'react';
import ColorSelection from 'components/ColorSelection';
import SizeSelection from 'components/SizeSelection';
import { Box, Image } from '@chakra-ui/react';
import addedItemImage from 'assets/images/addedItem.png';

const ProductEditContainer = () => {
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
    '#000000',
  ];
  return (
    <div className="flex pt-6">
      <Box className="pl-10 pr-8 border-r-[1px] border-tealBlue200">
        <Box className="border-[1px] w-[162px] h-[168px] overflow-hidden rounded-lg border-tealBlue200 ">
          <Image
            src={addedItemImage}
            className=" h-full object-cover w-full "
          />
        </Box>
        <p className="text-lg text-tealBlue900 font-bold pt-4">
          Plamdade come back to me
        </p>
        <p className="text-lg text-tealBlue900 font-bold pt-3">$7.65 USD</p>
        <Box className="flex text-base font-normal pb-3 pt-3">
          <span className="flex">
            <p className="text-tealBlue500 ">Color:</p>
            <p className="text-tealBlue900  px-1">Gray</p>.
          </span>
          <span className="flex">
            <p className="text-tealBlue500">Size:</p>
            <p className=" text-tealBlue900 px-1">XL</p>
          </span>
        </Box>
      </Box>
      <Box className=" pr-8 pl-10">
        <ColorSelection colors={colors} gap="12px" />
        <SizeSelection />
      </Box>
    </div>
  );
};

export default ProductEditContainer;
