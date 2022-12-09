import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import addedItemImage from 'assets/images/addedItem.png';
import trash from 'assets/icons/trash.svg';
import OfferPrice from 'components/atoms/OfferPrice';
const AddedCartItemBox = ({ type, changeModal, changeDeleteModal }) => {
  return (
    <Box className="flex justify-between md:px-4 pt-8 border-b-[1px]  w-full max-w-[387px] md:max-w-none border-tealBlue100">
      <Box>
        <Box className="border-[1px] w-[70px] h-[70px] md:w-[135px] mr-2 md:h-[121px] border-tealBlue200 ">
          <Image src={addedItemImage} className="object-cover h-full" />
        </Box>
      </Box>
      <Box
        className={type === 'mainCart' ? ' w-full max-w-[601px]' : 'w-[302px] '}
      >
        {type === 'mainCart' ? (
          <Box className="flex text-base font-bold text-tealBlue500 border-b-[1px] border-tealBlue100 pb-3">
            <p className="border-tealBlue500 pr-1">Hoody</p>.
            <p className="  px-1">Gray</p>.<p className="  px-1">XL</p>
          </Box>
        ) : (
          ''
        )}
        <Box
          className={`flex justify-between ${
            type === 'mainCart' ? 'pt-3 flex-col md:flex-row' : ''
          } items-start`}
        >
          <Box
            className={
              type === 'mainCart'
                ? 'flex gap-1 md:gap-11 flex-col w-full md:flex-row'
                : ''
            }
          >
            <p className="text-lg text-tealBlue800 font-bold">
              Plamdade come back to me
            </p>
            {type === 'mainCart' ? (
              <Box className=" flex justify-between  md:justify-around">
                <Box className="border-[1px] border-tealBlue100 items-center rounded-2xl text-tealBlue700 text-xl font-bold flex justify-evenly w-[100px] h-[32px]">
                  <p>-</p>
                  <p>1</p>
                  <p>+</p>
                </Box>
                <Box className="md:hidden">
                  <OfferPrice price="18.65" offerPrice="8.65" />
                </Box>
              </Box>
            ) : (
              <Box className="flex text-xs font-bold text-tealBlue500">
                <p className=" border-r-[1px] border-tealBlue500 px-1">Hoody</p>
                <p className=" border-r-[1px] border-tealBlue500 px-1">Gray</p>
                <p className=" border-r-[1px] border-tealBlue500 px-1">XL</p>
              </Box>
            )}
          </Box>
          {type === 'mainCart' ? (
            <Box className=" hidden md:block">
              <OfferPrice price="18.65" offerPrice="8.65" />
            </Box>
          ) : (
            <Image src={trash} onClick={changeDeleteModal} />
          )}
        </Box>
        <Box className=" flex justify-between mt-9">
          {type === 'mainCart' ? (
            <Box
              className="  uppercase  mb-7 border-[1px] cursor-pointer hidden  border-tealBlue400 items-center rounded-lg text-tealBlue700 text-xl font-bold md:flex justify-evenly w-[200px] h-[40px]"
              onClick={changeModal}
            >
              <p className="text-tealBlue800">EDIT ITEM</p>
            </Box>
          ) : (
            <Box className=" border-[1px] border-tealBlue400 items-center rounded text-tealBlue700 text-xl font-bold flex justify-evenly w-[116px] h-[40px]">
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </Box>
          )}
          {type === 'mainCart' ? (
            <Image
              src={trash}
              onClick={changeDeleteModal}
              className="hidden md:block"
            />
          ) : (
            <OfferPrice price="18.65" offerPrice="8.65" />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AddedCartItemBox;
