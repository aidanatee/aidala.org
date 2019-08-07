import React from 'react';

const Listing = (props) => (
  <div className="listing" key={props.key}>
    <div className="listing__img" style={{ backgroundImage: "url(" + props.img + ")"}}>
    </div>
    <div className="listing__description">
      <h3>{props.title}</h3>
      <p> {props.desc}</p>
    </div>
  </div>
);

export default Listing;
