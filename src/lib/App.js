// @flow

import React, {useState} from 'react';
import { categories } from './constants'
import CostList from '../list';
import ItemCreation from '../item';
import Statistics from '../statistics';
import './styles.css';

const App = React.memo(() => {
  const [note, updateNote] = useState('');
  const [cost, updateCost] = useState(0);
  const [category, updateCategory] = useState(categories[0]);
  const [itemsList, saveItem] = useState([]);
  const resetFields = () => {
    updateNote('');
    updateCost(0);
    updateCategory(categories[0])
  }
  return (
    <div>
      <ItemCreation
        note={note}
        cost={cost}
        categories={categories}
        category={category}
        updateCategory={updateCategory}
        updateNote={updateNote}
        updateCost={updateCost}
        saveItem={(newItem) => {
          saveItem([ ...itemsList, newItem]);
          resetFields();
        }}
      />
      <CostList itemsList= {itemsList} />
      <Statistics
        itemsList={itemsList}
        categories={categories}
      />
    </div>
  );
});
export default App;
