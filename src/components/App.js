import React, { Fragment, Component } from 'react';

import './App.scss';
import HomePage from '../pages/HomePage/HomePage';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCheckSquare, faCoffee);

class App extends Component {
  constructor() {
    super();
    this.state = {
      aboutIsClosed: false,
    };
    this.toogleAbout = this.toogleAbout.bind(this);
  }

  toogleAbout() {
    this.setState((prevState) => {
      return {
        aboutIsClosed: !prevState.aboutIsClosed,
      };
    });
  }

  render() {
    const aboutIsClosed = this.state.aboutIsClosed;
    console.log(aboutIsClosed);

    return (
      <Fragment>
        <div className=" page__container grid">
          <HomePage />
        </div>
      </Fragment>
    );
  }
}

export default App;
