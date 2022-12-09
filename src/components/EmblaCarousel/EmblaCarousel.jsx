import React, { useState, useEffect, useCallback } from 'react';
import { PrevButton, NextButton, Thumb } from './EmblaCarouselButtons.jsx';
import useEmblaCarousel from 'embla-carousel-react';
// import { mediaByIndex } from "../media";
// import ReviewCard from 'components/ReviewCard/index.jsx';
import './embla.css';
import { DotButton } from './EmblaCarouselButtons.jsx';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

const EmblaCarousel = ({
  children,
  direction,
  carouselType,
  slidesToScroll,
  play,
  show,
}) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: false, active: play },
      emblaRoot => emblaRoot.parentElement
    )
  );
  const [viewportRef, embla] = useEmblaCarousel(
    {
      loop: false,
      slidesToScroll: slidesToScroll,
      axis: direction,
    },
    [autoplay.current]
  );

  console.log(autoplay.current, 'autoplay');

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  console.log(carouselType, 'carouselType');
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    index => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  const onScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    embla.on('reInit', onSelect);
    embla.on('scroll', onScroll);
    onScroll();
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
  }, [embla, setScrollSnaps, onSelect, onScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        {children}
      </div>

      {show == true && (
        <PrevButton
          type={carouselType}
          onClick={scrollPrev}
          enabled={prevBtnEnabled}
        />
      )}

      {show == true && (
        <NextButton
          type={carouselType}
          onClick={scrollNext}
          enabled={nextBtnEnabled}
        />
      )}

      {carouselType === 'productDetail' && (
        <div className="embla__progress hidden mobile_md:block">
          <div
            className="embla__progress__bar"
            style={{ transform: `translateX(${scrollProgress}%)` }}
          />
        </div>
      )}
      {carouselType === 'hero' && (
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmblaCarousel;
