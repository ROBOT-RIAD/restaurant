import React from 'react';
import HeaderComponents from './header/HeaderComponents';
import FooterComponents from './footer/FooterComponents';
import BodyComponent from './body/BodyComponent';

const MainComponent = () => {
  return (
    <div>
      <HeaderComponents />
      <BodyComponent />
      <FooterComponents />
    </div>
    
  );
}

export default MainComponent;
