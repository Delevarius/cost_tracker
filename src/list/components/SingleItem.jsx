// @flow

import React from 'react';
import { Item } from '../../lib/types';
import '../style.css';

type Props = {
  item: Item
};

const SingleItem = React.memo(({ item }: Props) => (
  <div className="single_item">
    <div className="single_item_cell">
      {item.cost}
    </div>
    <div className="single_item_cell">
      {item.category}
    </div>
    <div className="single_item_cell">
      {item.note}
    </div>
  </div>
));
export default SingleItem;
