import React from 'react';
import {
  Box,
  Modal,
  Button,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
  Text,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import AddedCartItemBox from 'components/AddedCartItemBox';
import SideMenuCheckoutSection from 'components/SideMenuCheckoutSection';
const ShoppingCartMenu = ({ showMenu, addToCart }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(showMenu, 'showMenu');
  return (
    <>
      <Modal blockScrollOnMount={true} isOpen={showMenu} onClose={addToCart}>
        <ModalOverlay className=" bg-tealBlue400 bg-opacity-50" />
        <ModalContent className=" items-end">
          <div className="w-[500px] flex flex-col relative z-50 h-[920px] bg-white">
            <Box className=" flex  justify-between bg-tealBlue600 px-4 py-[26px]">
              <p className=" text-lg font-extrabold text-milkyWhite2 uppercase">
                Shopping Cart
              </p>
              <ModalCloseButton className=" text-milkyWhite2" />
            </Box>
            <AddedCartItemBox />
            <SideMenuCheckoutSection />
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShoppingCartMenu;
