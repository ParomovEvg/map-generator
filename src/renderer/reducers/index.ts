import { combineReducers } from 'redux';

import { ParamsState, paramsReducer } from './paramsReducer';

export interface RootState {
    params: ParamsState;
}

export const rootReducer = combineReducers<RootState | undefined>({
    params: paramsReducer
});
