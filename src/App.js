import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FormFilter from './components/form/formFilter';
import FormAdd from './components/form/formAdd';
import List from './components/list/list';
import reducer from './components/store/reducer';
import './App.css';

const store = createStore(reducer);

/**
 * Class represents an app for to-do list
 */
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FormAdd />
        <List/>
        <FormFilter />
      </div>
    </Provider>

  );
}

export default App;
