import { combineReducers } from 'redux';
import { paramsReducer } from './params';

export {paramsReducer} from './params'

export const rootReducer = combineReducers({
    params: paramsReducer
});
