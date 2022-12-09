import ReactImageMagnify from 'react-image-magnify';

import React from 'react';

const ImageMagnify = ({ image }) => {
  return (
    <div>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: image,
          },
          largeImage: {
            src: image,
            width: 1600,
            height: 1980,
          },
        }}
      />
      ;
    </div>
  );
};

export default ImageMagnify;
