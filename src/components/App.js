import React, { Fragment } from 'react';

import './App.scss';
import HomePage from '../pages/HomePage/HomePage';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCheckSquare, faCoffee);

const App = () => {
  
return (
      <Fragment>
        <div className=" page__container grid">
          <HomePage />
        </div>
      </Fragment>
    );
  
}

export default App;
