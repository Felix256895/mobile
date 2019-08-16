import { combineReducers } from 'redux';
import entities from './entities';
import app from './app';
import home from './home';

const rootReducer=combineReducers({
    entities,
    app,
    home,
});


export default rootReducer;