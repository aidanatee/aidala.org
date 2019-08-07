import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (

  //   <span className="icn-logo"><i className="material-icons">code</i></span>

 <div>
  <div className="title">
   <h1>AIDALA</h1>
  </div>

    <div className="navigation">

        <div className="menu-item"><NavLink exact to="/">МЕРОПРИЯТИЯ</NavLink></div>
          <div className="menu-item"><NavLink to="/listings">ОБЪЯВЛЕНИЯ</NavLink></div>
          <div className="menu-item"><NavLink to="/ngos">СПРАВОЧНИК</NavLink></div>

    </div>
  </div>
);

export default Navigation;
