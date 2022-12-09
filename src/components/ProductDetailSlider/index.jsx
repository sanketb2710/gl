import React, { useState } from 'react';
import EmblaCarousel from 'components/EmblaCarousel/EmblaCarousel';
import ProductDetailSliderImage from 'components/ProductDetailSliderImage';
import img1 from 'assets/images/img1.png';
const ProductDetailSlider = () => {
  const slides = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 122, 2, 3, 4, 5, 65, 6, 7, 7, 8, 8, 8,
  ];

  const [show, setShow] = useState(false);
  const mouseEnter = () => {
    setShow(true);
  };
  const mouseLeave = () => {
    setShow(false);
  };

  const [selected, setSelected] = useState('hel');
  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className="mt-7 mb-9 mobile_md:mb-0"
    >
      <EmblaCarousel
        carouselType="productDetail"
        show={show}
        direction="x"
        play={false}
      >
        <div className="embla__container">
          {slides.map((item, index) => (
            <div
              className=" pl-[5px] min-w-[20%] mobile_md:min-w-[33.33%] md_l:min-w-[25%] md_xl:min-w-[20%] relative"
              key={index}
            >
              {/* <div className="embla__slide__inner"> */}
              <ProductDetailSliderImage
                image={img1}
                id={index}
                selected={selected}
                setSelected={setSelected}
              />
              {/* </div> */}
              <p className=" text-tealBlue600 text-center text-sm font-bold mobile_md:hidden">
                Tshirt
              </p>
            </div>
          ))}
        </div>
      </EmblaCarousel>
    </div>
  );
};

export default ProductDetailSlider;
