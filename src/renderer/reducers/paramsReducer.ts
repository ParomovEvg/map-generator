import { Reducer } from 'redux';

import { Diameter, OffsetX, OffsetY, ParamsAction, Seed } from '../actions/paramsActions';
import { ActionTypes } from '../actions/actionTypes';


export interface ParamsState {
    readonly diameter:Diameter ;
    readonly offsetX: OffsetX;
    readonly offsetY: OffsetY;
    readonly seed: Seed;
}

const defaultState: ParamsState = {
    diameter: 512,
    offsetX: 0,
    offsetY: 0,
    seed: 0,
};

export const paramsReducer: Reducer<ParamsState, ParamsAction> = (
    state = defaultState,
    action
) => {
    switch (action.type) {
        case ActionTypes.SET_DIAMETER:
            return {
                ...state,
                diameter: action.value
            };
        case ActionTypes.SET_OFFSET_X:
                        return {
                ...state,
                offsetX: action.value
            };
        case ActionTypes.SET_OFFSET_Y:
                        return {
                ...state,
                offsetY: action.value
            };
        case ActionTypes.SET_SEED:
                        return {
                ...state,
                seed: action.value
            };
        default:{
            return state
        }
    }
};
