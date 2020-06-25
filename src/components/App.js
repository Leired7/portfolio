import React, { Fragment, Component } from 'react';

import './App.scss';

import Header from '../components/Header/index';
import Main from '../components/Main/index';
import WelcomePage from '../pages/Welcome/WelcomePage';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      welcomeIsOpened: true,
      aboutIsClosed: true,
    };
    this.onCloseWelcome = this.onCloseWelcome.bind(this);
    this.toogleAbout = this.toogleAbout.bind(this);
  }

  onCloseWelcome() {
    this.setState((prevState) => {
      return {
        welcomeIsOpened: !prevState.welcomeIsOpened,
      };
    });
  }

  toogleAbout() {
    this.setState((prevState) => {
      return {
        aboutIsClosed: !prevState.aboutIsClosed,
      };
    });
  }

  render() {
    const welcomeIsOpened = this.state.welcomeIsOpened;
    const aboutIsClosed = this.state.aboutIsClosed;
    return (
      <Fragment>
        {welcomeIsOpened ? (
          <div className="page__container">
            <Fragment>
              <Header toogleAbout={this.toogleAbout} />
              <Main aboutIsClosed={aboutIsClosed} />
              <Footer />
            </Fragment>
          </div>
        ) : (
          <WelcomePage onClose={this.onCloseWelcome} />
        )}
      </Fragment>
    );
  }
}

export default App;
