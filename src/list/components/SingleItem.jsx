// @flow

import React from 'react';
import { Item } from '../../lib/types';
import '../style.css';

type Props = {
  item: Item
};

const SingleItem = React.memo(({ item }: Props) => (
  <div className="single_item">
    <div>
      <div>Cost:</div>
      <div>
        {item.cost}
      </div>
    </div>
    <div>
      <div>Note:</div>
      <div>
        {item.note}
      </div>
    </div>
  </div>
));
export default SingleItem;
