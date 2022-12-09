import React from 'react';
import like from 'assets/icons/circledLike.svg';
import product from 'assets/images/product.png';
import { Box, Flex, Card, CardBody, Image } from '@chakra-ui/react';
import OfferPrice from 'components/atoms/OfferPrice';

const ProductCard = ({ type }) => {
  return (
    <Card
      className={` ${
        type === 'mainCart'
          ? 'border-1px border-tealBlue100 w-[280px]'
          : 'mobile_md:border-[0px] w-[213px]'
      } mobile_md:w-270px bg-white border-[1px]  border-milkyWhite2 mobile_md:rounded-lg`}
    >
      <CardBody className="w-full">
        <Box className="w-full h-60 bg-no-repeat">
          <Flex className=" absolute justify-end w-full p-4">
            <Image src={like} />
          </Flex>
          <Image src={product} />
        </Box>
        <Box className=" px-4 py-5">
          <p className=" font-bold text-base ">Product Name</p>
          <OfferPrice price="17.65" offerPrice="7.65" />
        </Box>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
