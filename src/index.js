import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import './generator';
import {createStore, applyMiddleware} from 'redux';
import {Provider, useSelector} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {saga} from './saga';

const sagaMiddleware = createSagaMiddleware()
const defaultState = []
function reducer(state=defaultState, action){
  console.log(action.type);
  switch (action.type) {
    case "FETCH-CS":
      
      return action.payload;

    default:
      return state;
  }
}
const store = createStore(reducer, applyMiddleware(sagaMiddleware ));

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
