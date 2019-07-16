// @flow

import React, { memo } from 'react';
import '../style.css';

const Header = memo(() => (
  <div className="single_item">
    <div className="single_item_cell">
      Cost
    </div>
    <div className="single_item_cell">
      Category
    </div>
    <div className="single_item_cell">
      Note
    </div>
  </div>
));
export default Header;
