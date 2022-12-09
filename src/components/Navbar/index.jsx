import React from 'react';
import { Image, Flex, Button, HStack, Box, chakra } from '@chakra-ui/react';
import Logo from '../../assets/icons/Logo.svg';
import Menu from '../../assets/icons/menu.svg';
import UserLogin from '../../assets/icons/UserLogin.svg';
import cart from '../../assets/icons/cart.svg';
import chevronDown from '../../assets/icons/chevronDown.svg';
import Search from '../../assets/icons/search.svg';
import { Link } from '@chakra-ui/react';
import CartNavigation from 'components/CartNavigation';

const Navbar = ({ type }) => {
  const data = [
    {
      label: 'Kitties',
    },
    {
      label: 'Deals',
    },
    {
      label: 'Puppers',
      more: [],
    },
    {
      label: 'Puppies',
      more: [],
    },
    {
      label: 'Sharks',
      more: [],
    },
    {
      label: 'Foxes',
    },
    {
      label: 'More',
      more: [],
    },
  ];
  return (
    <chakra.header id="header" className="px-3 md:px-7.5" px="15">
      <Flex w="100%" py="5" align="center" justify="space-between">
        {type === 'cart' ? '' : <Image src={Menu} className="md:hidden" />}
        <Image src={Logo} />
        {type === 'cart' ? (
          <Box>
            <h1 className="block text-2xl text-tealBlue900 font-bold mobile:hidden">
              Checkout
            </h1>
            <Box className="hidden mobile:block">
              <CartNavigation type="laptop" />
            </Box>
          </Box>
        ) : (
          <div className="hidden md:flex gap-9">
            {data.map((item, i) => (
              <Link key={i} className="hidden md:flex">
                <Button
                  variant="nav"
                  className=" text-base text-textColor1 font-medium "
                >
                  {item.label}
                  {item.more ? <Image px="1" p src={chevronDown} /> : ''}
                </Button>
              </Link>
            ))}
          </div>
        )}

        <HStack as="nav" spacing="20">
          {type === 'cart' ? '' : <Image src={Search} />}
          {type === 'cart' ? '' : <Image src={cart} />}
          <Image src={UserLogin} className="hidden md:block" />
        </HStack>
      </Flex>
    </chakra.header>
  );
};

export default Navbar;
