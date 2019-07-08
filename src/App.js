import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Container from './components/container/Container';
import reducer from './components/store/reducer';
import './App.css';

const store = createStore(reducer);

/**
 * Class represents an app for to-do list
 */
class App extends React.Component {
  /**
   * render an app
   * @return {ReactComponent}
   */
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
      
    );
  }
}

export default App;
