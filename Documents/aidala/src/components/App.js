import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Event from './Event';
import Listings from './Listings';
import Main from './Main';
import Navigation from './Navigation';
import NGOs from './NGOs';

const App = () => (
  <BrowserRouter>
    <div className="container">

     <Navigation />

     <Route exact path="/" component={Main} />
     <Route path="/listings" component={Listings} />
     <Route path="/ngos" component={NGOs} />
     <Route exact path="/event/:id" component={Event} />




    </div>
  </BrowserRouter>
);

export default App;
