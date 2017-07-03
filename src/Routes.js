import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import ChatRoom from './containers/ChatRoom';

const Routes = () =>
  (<main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/room" component={ChatRoom} />
      <Route component={Home} />
    </Switch>
  </main>);

export default Routes;
