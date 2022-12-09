import { Center, Divider, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import Category from 'components/Category';

import { categoriesData } from './categoriesData';

const Categories = () => {
  const borderItems = [0, 1, 3, 4, 6, 7, 9, 10];
  return (
    <React.Fragment>
      <Heading className=" text-textColor1 font-extrabold text-4xl  pt-24 mb-8">
        Shop by categories
      </Heading>

      <Wrap justify="center" className=" px-0 md:px-20" pb="100">
        {categoriesData.map((item, index) => {
          return (
            <React.Fragment>
              {index == 0 ? (
                <hr className=" w-full mt-6 md:hidden text-tealBlue100 " />
              ) : (
                ''
              )}
              <WrapItem
                key={index}
                className={
                  borderItems.includes(index)
                    ? 'px-2 py-6 border-r-[1px] md:border-r-[0px] border-tealBlue100 md:px-6 md:py-6'
                    : 'px-2 py-6 md:px-6 md:py-6'
                }
              >
                <Category
                  image={item.image}
                  name={item.name}
                  items={item.number}
                  index={index}
                />
              </WrapItem>
              {index == 2 || index == 5 || index == 8 ? (
                <hr className=" w-[85%] mt-6 md:hidden text-tealBlue100 " />
              ) : (
                ''
              )}
            </React.Fragment>
          );
        })}
      </Wrap>
    </React.Fragment>
  );
};
// />
export default Categories;
