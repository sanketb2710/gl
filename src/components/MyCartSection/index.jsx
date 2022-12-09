import React from 'react';
import { Box } from '@chakra-ui/react';
import AddedCartItemBox from 'components/AddedCartItemBox';
import SideMenuCheckoutSection from 'components/SideMenuCheckoutSection';
import EditItemModal from 'components/EditItemModal';
import { useState } from 'react';
import DeleteItemModal from 'components/DeleteItemModal';

const MyCartSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const changeEditModal = () => {
    setShowModal(!showModal);
  };
  const changeDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  return (
    <Box className=" px-4 md:px-[297px]">
      <Box className="flex items-center">
        <p className=" text-2xl text-tealBlue900 font-extrabold ">My Cart </p>
        <p className=" text-base text-tealBlue500 font-normal pl-2 ">
          (5 items)
        </p>
      </Box>
      {[1, 2, 34, 5, 6].map((item, index) => {
        return (
          <AddedCartItemBox
            type="mainCart"
            changeModal={changeEditModal}
            changeDeleteModal={changeDeleteModal}
          />
        );
      })}
      <DeleteItemModal
        showModal={showDeleteModal}
        changeDeleteModal={changeDeleteModal}
      />
      <EditItemModal showModal={showModal} changeModal={changeEditModal} />
      <Box className="flex justify-end mt-6">
        <SideMenuCheckoutSection type="mainCart" />
      </Box>
    </Box>
  );
};

export default MyCartSection;
