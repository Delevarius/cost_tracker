// @flow

import React, { memo } from 'react';
import { ItemsList, Categories } from '../../lib/types';
type Props = {
  itemsList: ItemsList,
  categories: Categories
};

const Statistics = memo(({ itemsList, categories }: Props) => (
  <div>
    <div>
      Total:
      {
        itemsList.reduce((reduced,item) => reduced + item.cost ,0)
      }
    </div>
    {
      categories.map(category => (
        <div>
          {category} :
          {
            itemsList.filter(item => item.category === category)
            .reduce((reduced, item) => item.cost, 0)
          }
        </div>
      ))
    }
  </div>
));
export default Statistics;
