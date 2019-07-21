// @flow

import React, { memo } from 'react';
import { ItemsList, Categories } from '../../lib/types';
import hat from 'hat';
import '../style.css';


type Props = {
  itemsList: ItemsList,
  categories: Categories
};

const Statistics = memo(({ itemsList, categories }: Props) => (
  <div className="statistics_wrapper">
    <div className="total_cost">
      Total:
      {
        itemsList.reduce((reduced,item) => reduced + item.cost ,0)
      }
    </div>
    {
      categories.map(category => (
        <div key={hat()} className="total_cost">
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
