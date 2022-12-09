import React from 'react';
import Adsection from 'assets/images/Adsection.png';
import Adsection1 from 'assets/images/Adsection1.png';
import Adsection2 from 'assets/images/Adsection-2.png';
import adBtn from 'assets/images/addSection.png';
import adBtn1 from 'assets/images/addSectionButton1.png';
import adBtn2 from 'assets/images/addSectionButton2.png';
import TransitionSider from 'components/CustomTransitionSlider';

const AdSection = () => {
  const imgArr = [Adsection, Adsection1, Adsection2];
  const imgBtnArr = [adBtn, adBtn1, adBtn2];

  return <TransitionSider imgArr={imgArr} imgBtnArr={imgBtnArr} type="ad" />;
};

export default AdSection;
