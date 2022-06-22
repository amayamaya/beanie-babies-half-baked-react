import './App.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import BeaniesPage from './BeaniesPage';
import BeanieDetail from './BeanieDetail';

export default function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <NavLink exact activeClassName="active-link" to="/">
              List Page
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <BeaniesPage />
            {/* this home page route should list all the beanies */}
          </Route>
          <Route exact path="/beanieBabies/:id">
            <BeanieDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
