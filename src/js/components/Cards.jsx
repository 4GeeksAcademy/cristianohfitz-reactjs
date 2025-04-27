import React from 'react';
import Card from './Card';

function Cards() {
  return (
    <div className="container">
      <div className="row">
        <Card title="Card Title" text="This is the First Card" />
        <Card title="Card Title" text="This is the Second Card" />
        <Card title="Card Title" text="This is the Third Card." />
        <Card title="Card Title" text="This is the Fourth Card" />
      </div>
    </div>
  );
}

export default Cards;
