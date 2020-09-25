import React from 'react';
import Item from './Item'

const ItemsList = ({ items }) => (
  items.map(item => <Item item={item} />)
)

export default ItemsList;