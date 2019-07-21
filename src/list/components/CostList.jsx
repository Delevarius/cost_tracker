// @flow

import React, { memo } from 'react';
import hat from 'hat';
import { ItemsList } from '../../lib/types';
import SingleItem from './SingleItem';
import Header from './Header';
import '../style.css';

type Props = {
  itemsList: ItemsList,
};

const CostList = memo(({ itemsList }: Props) => (
  <div className="list_wraper">
    <Header />
    {
      itemsList.map(item => (
        <SingleItem key={hat()} item={item} />
      ))
    }  
  </div>
));
export default CostList;
