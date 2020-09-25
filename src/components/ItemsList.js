import React from 'react';

const ItemsList = ({ items }) => (
  items.map(item => <li>{item.name}: {item.shortDescription}</li>)
)

export default ItemsList;
