import { HStack, Image } from '@chakra-ui/react';
import React from 'react';
import phone from '../../assets/icons/phone.svg';
import email from '../../assets/icons/email.svg';

const Heading = () => {
  return (
    <div className="hidden md:flex bg-tealBlue700 py-2 justify-end w-full">
      <HStack>
        <span className="flex">
          <Image src={email} />
          <p className=" text-sm font-medium text-milkyWhite px-2">
            support@gearlaunch.com
          </p>
        </span>
        <span className="flex px-11">
          <Image src={phone} />
          <p className=" text-sm font-medium text-milkyWhite px-2">
            1-8002-1054(723-3332)
          </p>
        </span>
      </HStack>
    </div>
  );
};

export default Heading;
