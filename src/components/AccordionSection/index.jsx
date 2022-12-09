import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
  Box,
  Image,
  Flex,
} from '@chakra-ui/react';

import chevron from 'assets/icons/accordionChevron.svg';
import chev from 'assets/icons/accShevron.svg';
import ReviewStar from 'components/atoms/ReviewStar';
import DescriptionAccordion from 'components/DescriptionAccordion';
import ProductReviewCard from 'components/ProductReviewCard';

const AccordionSection = () => {
  const [open, setOpen] = useState(false);
  const stars = [1, 2, 3, 4, 5];
  return (
    <Box className="max-w-[825px] ">
      <DescriptionAccordion />
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem className=" border-b-tealBlue100 pt-[26px] pb-4 border-b-[1px]">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="text-tealBlue900 uppercase text-base font-extrabold"
                  >
                    Product Details
                  </Box>
                  {/* <AccordionIcon /> */}
                  <Image
                    src={isExpanded ? chev : chevron}
                    className={isExpanded ? 'rotate-180' : ''}
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className="text-tealBlue400 text-base normal-case font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem className=" border-b-tealBlue100 pt-[26px] pb-4 border-b-[1px]">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className=" text-tealBlue900 text-base uppercase font-extrabold"
                  >
                    Shipping Details
                  </Box>
                  <Box className=" text-[#9AA4B2] hover:text-aquaBlue600">
                    <img
                      src={isExpanded ? chev : chevron}
                      className={isExpanded ? 'rotate-180' : ''}
                    />
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className="text-tealBlue400 text-base normal-case font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem className=" border-b-tealBlue100 pt-[26px] pb-4 border-b-[1px]">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className=" text-tealBlue900 text-base font-extrabold uppercase flex gap-[10px]"
                  >
                    Reviews{' '}
                    <ReviewStar
                      stars={stars}
                      size="small"
                      number={4}
                      reviews={4}
                    />
                  </Box>
                  <Image
                    src={isExpanded ? chev : chevron}
                    className={isExpanded ? 'rotate-180' : ''}
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex className="justify-between mt-3">
                  <p className="text-tealBlue800 text-sm font-bold">
                    Reviews(72)
                  </p>
                  <p className=" text-[#2D8998] text-base font-medium">
                    Write review
                  </p>
                </Flex>
                <Flex className="justify-between">
                  <Box>
                    <Flex>
                      <h1 className=" text-7xl font-normal text-darkBlue">
                        4.8
                      </h1>
                      <ReviewStar reviews={5} stars={[1]} />
                    </Flex>
                    <h1 className=" text-sm font-medium text-[#617173]">
                      15.1k Total Reviews
                    </h1>
                  </Box>
                  <Flex className="flex-col">
                    <ProductReviewCard
                      head1="Quality is great"
                      text2="Dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's."
                      reviewPerson="Will Smith"
                      date="30 June 2022"
                    />
                    <ProductReviewCard
                      head1="Good quality"
                      text2="Dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's stan- dard dummy text ever since when an unknown printer took a galley of type."
                      reviewPerson="John Cena"
                      date="28 June 2022"
                    />
                  </Flex>
                </Flex>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default AccordionSection;
