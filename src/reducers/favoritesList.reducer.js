import {put} from 'redux-saga/effects';
import axios from 'axios';


const favoritesList = (state = [], action) => {
    if (action.type === 'MAKE_FAVORITE') {
        return [...state, action.payload]
    }
    return state;
}

export default favoritesList;