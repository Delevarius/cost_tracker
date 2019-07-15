// @flow

import React from 'react';
import { ItemsList } from '../../lib/types';
import SingleItem from './SingleItem';
import '../style.css';

type Props = {
  itemsList: ItemsList,
};

const CostList = React.memo(({ itemsList }: Props) => (
  <div>
    <div>Total:
      {
        itemsList.reduce((reduced,item) => reduced + item.cost ,0)
      }
    </div>
    <div>
      {
        itemsList.map(item => (
          <SingleItem item={item} />
        ))
      }  
    </div>
  </div>
));
export default CostList;
