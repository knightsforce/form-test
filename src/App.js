import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';


import rootReducer from './reducers/rootReducer';
import rootSaga from './rootSaga';


import './App.css';
import Header from './components/header/Header';
import CalculatingExchange from './containers/calculatingExchange/ContainerCalculatingExchange';

import { getCurrencies } from './actions';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);





class App extends Component {

  componentDidMount() {
    this.props.getCurrencies();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <CalculatingExchange/>
      </div>
    );
  }
}

export default connect(
  ()=>{
    return {

    }
  },
  (dispatch) => {
    return {
      getCurrencies: () => dispatch(getCurrencies())
    }
  }
)(App);
