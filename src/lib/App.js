// @flow

import React from 'react';
import ItemsList from '../list';
import ItemCreation from '../item';
import './styles.css';

type Props = {
    
};

const App = React.memo((props: Props) => {
    return (
        <div>
            <ItemCreation />
            <ItemsList />
        </div>
    );
});
export default App;
