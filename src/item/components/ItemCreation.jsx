// @flow

import React from 'react';
type Props = {
  note: String,
  cost: Number,
  updateNote: () => {},
  updateCost: () => {},
  saveItem: () => {},
};

const ItemsCreation = React.memo(({ note, cost, updateCost, updateNote, saveItem}: Props) => (
    <div>
      <div>
        <div>Note</div>
        <input
          type="text"
          value={note}
          onChange={e => {updateNote(e.target.value)}}
        />
      </div>
      <div>
        <div>Cost</div>      
        <input
          type="number"
          value={cost}
          onChange={e => {updateCost(Number(e.target.value))}}
        />
      </div>
      <button
        onClick={() => saveItem({note, cost})}
      >
        Save
      </button>
    </div>
));

export default ItemsCreation;
