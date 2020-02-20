import { Action } from 'redux';
import { ActionTypes } from './actionTypes';

export type Diameter = "512" | "1024" | "2048" | "4096" | "8192";
export type OffsetX = string;
export type OffsetY = string;
export type Seed = string;

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

export type ParamsAction = SetDiameterAction | SetOffsetXAction | SetOffsetYAction | SetSeedAction;
