import React from 'react';
import dollar from 'assets/icons/dollar.svg';
import creditcard from 'assets/icons/creditcard.svg';
import headphones from 'assets/icons/headphones.svg';
import shipping from 'assets/icons/shipping.svg';
import { Flex } from '@chakra-ui/react';
import FooterInfoBox from 'components/FooterInfoBox';

const footerInfoData = [
  {
    image: shipping,
    head1: 'free shipping',
    text: 'Free Shipping for orders over $250',
  },
  {
    image: headphones,
    head1: '24*7 support',
    text: '24 hours a day, 7 days a week',
  },
  {
    image: creditcard,
    head1: 'Flexible Payment',
    text: 'Pay with Multiple Credit Cards',
  },
  {
    image: dollar,
    head1: 'Money Guarantee',
    text: 'Within 30 days for an exchange.',
  },
];
// divide-y-[1px] md:divide-y-[0px] md:divide-x-[1px]
const FooterInfo = () => {
  return (
    <Flex
      className="px-7.5 py-10 md:py-16 bg-tealBlue50  divide-tealBlue100 flex-col  md:flex-row"
      justifyContent="space-between"
    >
      {footerInfoData.map((item, index) => {
        return (
          <FooterInfoBox
            image={item.image}
            head1={item.head1}
            text={item.text}
            key={index}
          />
        );
      })}
    </Flex>
  );
};

export default FooterInfo;
