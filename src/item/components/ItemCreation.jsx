// @flow

import React, { memo } from 'react';
import hat from 'hat';
import { Categories } from '../../lib/types';
import '../style.css';

type Props = {
  note: String,
  cost: Number,
  category: String,
  categories: Categories, 
  updateNote: () => {},
  updateCost: () => {},
  saveItem: () => {},
  updateCategory: () => {},
};

const ItemsCreation = memo(({
    note, cost, updateCost,
    updateNote, saveItem, category,
    categories, updateCategory
  }: Props) => (
    <div className="item_creation_wrapper">
      <div className="item_creation_unit">
        <div>Cost</div>      
        <input
          type="number"
          value={cost}
          className="cost_input"
          onChange={e => {updateCost(Number(e.target.value))}}
        />
      </div>
      <div className="item_creation_unit">
        <div>Category</div>
        <select
          type="text"
          value={category}
          className="category_input"
          onChange={e => {updateCategory(e.target.value)}}
        >
          {
            categories.map(c => (
              <option
                value={c}
                key={hat()}
              >
                {c}
              </option>
            ))
          }
        </select>
      </div>
      <div className="item_creation_unit">
        <div>Note</div>
        <input
          type="text"
          value={note}
          className="note_input"
          onChange={e => {updateNote(e.target.value)}}
        />
      </div>
      <button
        className="save_item"
        onClick={() => saveItem({note, category, cost})}
      >
        Save
      </button>
    </div>
));

export default ItemsCreation;
