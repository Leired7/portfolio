import React, { Fragment } from 'react';

import Header from '../../components/Header/index';
import Main from '../../components/Main/index';
import Footer from '../../components/Footer/index';
import './styles.scss';

function HomePage({ aboutIsClosed, toogleAbout }) {
  return (
    <Fragment className="grid">
      <Header toogleAbout={toogleAbout} />
      <Main aboutIsClosed={aboutIsClosed} />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
