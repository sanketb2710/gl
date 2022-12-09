import React from 'react';
import chevronDown from '../../assets/icons/chevronDown.svg';

export const DotButton = ({ id, selected, imgIndex, onClick, setImgIndex }) => {
  const imgSelector = index => {
    index.preventDefault();
    setImgIndex(index?.target?.id);
  };
  console.log(imgIndex, 'index.target.id imgIndex');
  return (
    <button
      key={id}
      id={id}
      className={`embla__dot ${selected ? 'is-selected' : ''}`}
      type="button"
      onClick={e => imgSelector(e)}
    >
      {selected ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10"
            cy="10"
            r="6"
            transform="rotate(90 10 10)"
            fill="#4B5565"
          />
          <circle
            cx="10"
            cy="10"
            r="9.5"
            transform="rotate(90 10 10)"
            stroke="#121926"
          />
        </svg>
      ) : (
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="4"
            cy="4"
            r="4"
            transform="rotate(90 4 4)"
            fill="#9AA4B2"
          />
        </svg>
      )}
    </button>
  );
};

export const Thumb = ({ selected, onClick, imgSrc }) => (
  <div
    className={`embla__slide embla__slide--thumb ${
      selected ? 'is-selected' : ''
    }`}
  >
    <button
      onClick={onClick}
      className="embla__slide__inner embla__slide__inner--thumb"
      type="button"
    >
      <img className="embla__slide__thumbnail" src={imgSrc} alt="A cool cat." />
    </button>
  </div>
);

export const PrevButton = ({ type, enabled, onClick }) => (
  <button
    className={`embla__button hidden mobile_md:block ${
      type === 'productDetail'
        ? 'embla__button__productDetail--prev'
        : 'embla__button--prev'
    } text-[#9AA4B2] hover:text-aquaBlue600`}
    onClick={onClick}
    disabled={!enabled}
  >
    {type == 'productDetail' ? (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" rotate-90"
      >
        <g filter="url(#filter0_d_5778_3634)">
          <rect
            x="3"
            y="3"
            width="24"
            height="24"
            rx="12"
            fill="currentColor"
          />
          <path
            d="M11 14L15 18L19 14"
            stroke="#FCFCFD"
            stroke-width="1.5"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_5778_3634"
            x="0"
            y="0"
            width="32"
            height="32"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_5778_3634"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_5778_3634"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ) : (
      <svg
        className=" w-8 md:w-10"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="40"
          height="40"
          rx="20"
          transform="matrix(-1 0 0 1 40 0)"
          fill="#FCFCFD"
        />
        <path
          d="M21.6667 26.6667L15 20L21.6667 13.3334"
          stroke="#697586"
          stroke-width="1.5"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </svg>
    )}
  </button>
);

export const NextButton = ({ type, enabled, onClick }) => (
  <button
    className={`embla__button hidden mobile_md:block ${
      type === 'productDetail'
        ? 'embla__button__productDetail--next'
        : 'embla__button--next'
    } text-[#9AA4B2] hover:text-aquaBlue600`}
    onClick={onClick}
    disabled={!enabled}
  >
    {type == 'productDetail' ? (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" -rotate-90"
      >
        <g filter="url(#filter0_d_5778_3634)">
          <rect
            x="3"
            y="3"
            width="24"
            height="24"
            rx="12"
            fill="currentColor"
          />
          <path
            d="M11 14L15 18L19 14"
            stroke="#FCFCFD"
            stroke-width="1.5"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_5778_3634"
            x="0"
            y="0"
            width="32"
            height="32"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_5778_3634"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_5778_3634"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ) : (
      <svg
        className=" w-8 md:w-10"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="20" fill="#FCFCFD" />
        <path
          d="M18.3333 26.6667L25 20L18.3333 13.3334"
          stroke="#697586"
          stroke-width="1.5"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </svg>
    )}
  </button>
);
