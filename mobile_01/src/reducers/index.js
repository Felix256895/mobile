import {combineReducers} from 'redux';
import {counter} from './counter/index';
import {auth} from './auth/index';


//合并多个reducers
export default combineReducers({counter,auth});;