import React from 'react';

const Item = ({ item }) => (
  <div className="item">
    <img className="ui avatar image" src={item.image} />
    <div className="content">
      <div className="header">{item.name}</div>
      <div className="description">{item.shortDescription}</div>
    </div>
  </div>
)

export default Item;