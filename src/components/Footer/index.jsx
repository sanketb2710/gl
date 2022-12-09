import { HStack, Image, Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import gearl from 'assets/icons/pbGearlaunch.svg';
import contact from 'assets/icons/contact.svg';
import amex from 'assets/icons/Amex.svg';
import discover from 'assets/icons/Discover.svg';
import mastercard from 'assets/icons/Mastercard.svg';
import paypal from 'assets/icons/PayPal.svg';
import visa from 'assets/icons/Visa.svg';
import animal from 'assets/icons/animalmerch.png';

const arr1 = ['Support', 'Contact', 'Return & Refund Policy', 'Track Order'];
const arr2 = [visa, amex, mastercard, discover, paypal];
const Footer = () => {
  return (
    // <div>
    <Flex className="bg-tealBlue50 px-4 py-10  md:px-7.5 flex-col ">
      <Flex
        justify="space-between"
        className="flex-col items-start md:items-end md:flex-row "
      >
        <Flex className="flex-col md:gap-24 items-baseline md:flex-row md:items-center">
          <Image src={animal} className="mb-6 md:mb-0" />
          <VStack alignItems="flex-start" className=" mb-12 md:mb-0">
            <span className="flex md:mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#06AED4"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <p className="px-4 text-base font-medium text-textColor1">
                support@animalmerch.com
              </p>
            </span>
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#06AED4"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <p className="px-4 flex text-base font-medium text-textColor1">
                +1 855-999-7840
                <p className="text-textColor2">[9AM - 5PM PST, Mon - Fri]</p>
              </p>
            </span>
          </VStack>
        </Flex>
        <Flex className="items-start flex-col md:items-end">
          <Flex className=" flex-col w-full items-baseline md:flex-row md:gap-8 mb-5">
            {arr1.map((item, index) => {
              return (
                <p
                  key={index}
                  className="text-tealBlue600 text-base font-medium mb-4 md:mb-0"
                >
                  {item}
                </p>
              );
            })}
            <p className="text-tealBlue600 text-base font-medium mb-4 md:mb-0 md:hidden">
              Privacy Policy
            </p>
            <p className="text-tealBlue600 w-full text-base flex mb-4 md:mb-0 justify-between font-medium md:hidden">
              Terms & Conditions
              <Image src={contact} className="md:hidden -mt-5" />
            </p>
          </Flex>
          <Flex className="gap-4  flex-wrap md:gap-4 ">
            {arr2.map((item, index) => (
              <Image key={index} src={item} />
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Flex className="justify-center md:justify-between " mt="44">
        <Image src={gearl} />
        <HStack>
          <p className="text-tealBlue600 hidden md:block text-base font-medium">
            Privacy Policy
          </p>
          <p className="text-tealBlue600 text-base font-medium hidden md:block">
            Terms & Conditions
          </p>
          <Image src={contact} className="hidden md:block" />
        </HStack>
      </Flex>
    </Flex>
    // </div>
  );
};

export default Footer;
