import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
  Box,
  Image,
} from '@chakra-ui/react';
import chev from 'assets/icons/accordionChevron.svg';
import chevron from 'assets/icons/accShevron.svg';
const DescriptionAccordion = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple={true}>
      <AccordionItem className=" border-b-tealBlue100  pt-[26px] pb-4 border-b-[1px]">
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  className=" text-tealBlue900 uppercase text-base font-extrabold"
                >
                  <Box className="flex justify-between">
                    Description
                    <Image
                      src={isExpanded ? chevron : chev}
                      className={isExpanded ? 'rotate-180' : ''}
                    />
                  </Box>
                  <p className=" text-tealBlue400 text-base normal-case font-semibold">
                    Designed, printed & shipped directly from the U.S.A to
                    anywhere in the world (including APO/FPO bases).
                  </p>
                  {isExpanded ? (
                    ''
                  ) : (
                    <p className=" text-aquaBlue600 normal-case text-base font-semibold">
                      Read more
                    </p>
                  )}
                </Box>
                {/* <AccordionIcon /> */}
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              className=" text-tealBlue400 text-base font-semibold normal-case"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <p className=" normal-case text-aquaBlue600 text-base font-semibold">
                Show less
              </p>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default DescriptionAccordion;
