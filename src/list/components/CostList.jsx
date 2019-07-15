// @flow

import React from 'react';
import { ItemsList } from '../../lib/types';
import SingleItem from './SingleItem';

type Props = {
  itemsList: ItemsList,
};

const CostList = React.memo(({ itemsList }: Props) => (
  <div>
    {console.log(itemsList)}
    <div>
      {
        itemsList.map(item => (
          <SingleItem item={item} />
        ))
      }  
    </div>
    <div>Total:
      {
        itemsList.reduce((reduced,item) => reduced + item.cost ,0)
      }
    </div>
  </div>
));
export default CostList;
