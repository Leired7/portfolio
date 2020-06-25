import React from 'react';

import './styles.scss';

import About from '../About/index';
import ProjectList from '../ProjectList/index';
import aboutMe from '../../services/aboutMe';

function Main({ aboutIsClosed }) {
  return (
    <main className="main__container">
      {aboutIsClosed ? <ProjectList /> : <About />}
    </main>
  );
}

export default Main;
