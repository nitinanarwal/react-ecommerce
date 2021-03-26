import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
  Home,
  About,
  Products,
  SingleProduct,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
} from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path='/' exact={true}>
          <Home />
        </Route>
        <Route path='/about' exact={true}>
          <About />
        </Route>
        <Route path='/cart' exact={true}>
          <Cart />
        </Route>
        <Route path='/products' exact={true}>
          <Products />
        </Route>
        <Route
          path='/product/:id'
          exact={true}
          children={<SingleProduct />}
        ></Route>
        <Route path='/checkout' exact={true}>
          <Checkout />
        </Route>
        <Route path='*' exact={true}>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
