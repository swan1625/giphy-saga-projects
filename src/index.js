import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';


import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
 /// put yield takeEverys here =-] 
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();




const storeInstance = createStore(
    combineReducers({
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);


ReactDOM.render( <Provider store={storeInstance}> <App /> </Provider> ,  document.getElementById('root'));
