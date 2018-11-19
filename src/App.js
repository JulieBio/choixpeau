import React, { Component } from 'react';
import './App.css';
import Result from './containers/Result';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';


const store = createStore(reducers);


class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className='App' style={StyleSheet.app}>
          <Result />
        </div>
      </Provider>
    )
  }
}

export default App;
