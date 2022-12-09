import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import ProductEditContainer from 'components/ProductEditContainer';

const EditItemModal = ({ showModal, changeModal }) => {
  return (
    <>
      <Modal blockScrollOnMount={true} isOpen={showModal} onClose={changeModal}>
        <ModalOverlay className=" bg-tealBlue400 bg-opacity-50" />
        <ModalContent className=" items-center">
          <div className="w-[634px] h-[518px] flex flex-col relative z-50 bg-white">
            <Box className=" flex  justify-between px-4 py-[26px] border-[1px] border-tealBlue100 ">
              <p className=" text-lg font-extrabold text-tealBlue900 uppercase">
                Edit Cart
              </p>
              <ModalCloseButton className=" text-tealBlue400" />
            </Box>
            <ProductEditContainer />
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditItemModal;
