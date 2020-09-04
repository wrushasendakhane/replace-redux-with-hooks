import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Products from './containers/products';
import NavBar from './components/navBar';
import Favorites from './components/favorites';

function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/allProducts" component={Products} />
          <Route path="/favorites" component={Favorites} />
          <Redirect from="/" to="/allProducts" />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
