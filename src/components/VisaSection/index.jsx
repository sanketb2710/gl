import React from 'react';
import amex from 'assets/icons/Amex.svg';
import discover from 'assets/icons/Discover.svg';
import mastercard from 'assets/icons/Mastercard.svg';
import paypal from 'assets/icons/PayPal.svg';
import visa from 'assets/icons/Visa.svg';
import { Flex, Image } from '@chakra-ui/react';
const VisaSection = () => {
  const arr2 = [visa, amex, mastercard, discover, paypal];

  return (
    <Flex className="gap-4  flex-wrap md:gap-4 ">
      {arr2.map((item, index) => (
        <Image key={index} src={item} />
      ))}
    </Flex>
  );
};

export default VisaSection;
