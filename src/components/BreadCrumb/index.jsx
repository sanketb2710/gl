import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import chevright from 'assets/icons/chevron-left.svg';
import { Image } from '@chakra-ui/react';
const BreadCrumb = () => {
  return (
    <Breadcrumb spacing="8px" separator={<Image src={chevright} />}>
      <BreadcrumbItem>
        <BreadcrumbLink
          className=" text-tealBlue700 text-sm font-medium"
          href="#"
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink
          className=" text-tealBlue700 text-sm font-medium"
          href="#"
        >
          Shop
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink
          className="text-tealBlue500 text-sm font-medium"
          href="#"
        >
          Hoodie
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadCrumb;
