import React from 'react';
import Card from './Card';

const BeerList = ({ beers }) => {
  return (
    <div className="beer-list">
      {beers.map((beer) => (
        <Card key={beer.id} beer={beer} />
      ))}
    </div>
  );
};

export default BeerList;