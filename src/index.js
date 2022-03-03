import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {takeEvery, put} from 'redux-saga/effects';


import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
 /// put yield takeEverys here =-] 
    yield takeEvery('SEARCH_GIFS', searchGifs )
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


function* searchGifs(action){
   console.log( action.payload, 'baby');
   
    try {
        const results = yield axios.get(`/api/giphy/${action.payload}` )

        yield put({ type: 'SET_RESULTS', payload: results.data })
    } catch (error){
        console.log('error in search gifs', error );

    }
}

const searchResults = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_RESULTS':
            return action.payload;
        default:
            return state;
    }
};   






const storeInstance = createStore(
    combineReducers({
        searchResults
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);


ReactDOM.render( <Provider store={storeInstance}> <App /> </Provider> ,  document.getElementById('root'));
