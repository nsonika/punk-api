import React from 'react';

const Card = ({ beer }) => {
  return (
    <div className="card-small">
       <div className="card-content">
      <img src={beer.image_url} alt={beer.name} />
      <h3>{beer.name}</h3>
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      </div>
    </div>
  );
};

export default Card;
