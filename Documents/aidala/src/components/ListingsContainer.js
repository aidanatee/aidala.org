import React from 'react';
import Listing from './Listing';

const ListingsContainer = (props) => {
  let listings = props.data.map((listing) => {
    return <Listing id={listing.id}
                   title={listing.name}
                   desc={listing.tweet}
                   img={listing.postImage}
                   />
  });
  return (
    <div className="listings">
      {listings}
    </div>
  );
}

export default ListingsContainer;
