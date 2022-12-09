import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Box,
} from '@chakra-ui/react';

const DeleteItemModal = ({ showModal, changeDeleteModal }) => {
  return (
    <>
      <Modal
        blockScrollOnMount={true}
        isOpen={showModal}
        onClose={changeDeleteModal}
      >
        <ModalOverlay className=" bg-tealBlue400 bg-opacity-50" />
        <ModalContent className=" items-center">
          <div className="flex flex-col relative z-50b w-[460px] bg-white">
            <Box className=" flex  justify-between px-4 py-[26px] border-[1px] border-tealBlue100 ">
              <p className=" text-base font-extrabold text-tealBlue900 uppercase">
                Delete Item
              </p>
              <ModalCloseButton className="text-tealBlue400" />
            </Box>
            <Box className="p-5">
              <p className="text-base font-normal text-tealBlue600">
                Do you want to remove item from Cart ?
              </p>
              <Box className=" w-full flex justify-between items-center pt-[50px]">
                <Box
                  className="text-base max-w-[202px] w-full flex justify-center font-extrabold text-milkyWhite2 bg-tealBlue900 rounded-lg py-3 uppercase px-[68.5]"
                  onClick={changeDeleteModal}
                >
                  Cancel
                </Box>
                <Box className="text-base max-w-[202px] w-full border-[1px] border-tealBlue300 flex justify-center font-extrabold text-teqalBlue900 bg-milkyWhite2 rounded-lg py-3 uppercase px-[68.5]">
                  Confirm
                </Box>
              </Box>
              {/* <ProductEditContainer /> */}
            </Box>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteItemModal;
