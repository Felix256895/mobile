import { combineReducers } from 'redux';
import shop from './shop';
import orders from './orders';

const rootReducer=combineReducers({
    shop,
    orders,
});


export default rootReducer;