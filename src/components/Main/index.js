import React from 'react';

import './styles.scss';

import About from 'components/About/index';
import ProjectList from 'components/ProjectList/index';

import { Switch, Route } from 'react-router-dom';
import Welcome from 'components/Welcome';

function Main({ aboutIsClosed, toogleAbout }) {
  return (
    <React.Fragment>
      <main className="main__container">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projectlist" component={ProjectList} />
          <Route path="/" component={Welcome} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default Main;
