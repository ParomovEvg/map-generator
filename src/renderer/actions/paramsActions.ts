import { Action, ActionCreator } from 'redux';
import { ActionTypes } from './actionTypes';

export type Diameter = 512 | 1024 | 2048 | 4096 | 8192;
export type OffsetX = number;
export type OffsetY = number;
export type Seed = number;

export interface SetDiameterAction extends Action {
    type: ActionTypes.SET_DIAMETER;
    value: Diameter
}
export interface SetOffsetXAction extends Action {
    type: ActionTypes.SET_OFFSET_X;
    value: OffsetX
}
export interface SetOffsetYAction extends Action {
    type: ActionTypes.SET_OFFSET_Y;
    value: OffsetY
}
export interface SetSeedAction extends Action {
    type: ActionTypes.SET_SEED;
    value: Seed
}

export type ParamsFields = Diameter | OffsetY | OffsetX | Seed
export type ParamsAction = SetDiameterAction | SetOffsetXAction | SetOffsetYAction | SetSeedAction;
