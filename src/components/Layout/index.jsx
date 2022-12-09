import React, { Fragment } from 'react';
import FooterMain from 'components/FooterMain';
import Navbar from 'components/Navbar';

const Layout = ({ children, type }) => {
  return (
    <Fragment>
      <Navbar type={type} />
      {children}
      <FooterMain />
      {/* </Navbar> */}
    </Fragment>
  );
};

export default Layout;
