// @flow

import React, {useState} from 'react';
import CostList from '../list';
import ItemCreation from '../item';
import './styles.css';

const App = React.memo(() => {
  const [note, updateNote] = useState('');
  const [cost, updateCost] = useState(0);
  const [itemsList, saveItem] = useState([]);
  const resetFields = () => {
    updateNote('');
    updateCost(0);
  }
  return (
    <div>
      <ItemCreation
        note={note}
        cost={cost}
        updateNote={updateNote}
        updateCost={updateCost}
        saveItem={(newItem) => {
          saveItem([ ...itemsList, newItem]);
          resetFields();
        }}
      />
      <CostList itemsList= {itemsList} />
    </div>
  );
});
export default App;
