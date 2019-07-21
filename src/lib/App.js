// @flow

import React, {useState} from 'react';
import { categories } from './constants'
import CostList from '../list';
import ItemCreation from '../item';
import Statistics from '../statistics';
import './styles.css';

const App = React.memo(() => {
  // all state managment is done on this root level of the app
  // to simulate a central data store and event system
  // for this to be scalable, it would be abstracted with something like redux or
  // a hooks reducer system 
  const [note, updateNote] = useState('');
  const [cost, updateCost] = useState(0);

  // data for categories would be loaded via an API with an useEffect hook
  // to handle the fetching of the data, then be loaded in the state managment
  // to simplify it for this demo, it is just imported as a constant
  
  const [category, updateCategory] = useState(categories[0]);
  const [itemsList, saveItem] = useState([]);

  // simple wrapper to make reseting cleaner to re-use
  const resetFields = () => {
    updateNote('');
    updateCost(0);
    updateCategory(categories[0])
  }

  return (
    <div className="app_wrapper">
      <div className="title">Cost Tracker</div>
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
