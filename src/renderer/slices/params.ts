import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';

export type Diameter = "512" | "1024" | "2048" | "4096" | "8192";
export type OffsetX = string;
export type OffsetY = string;
export type Seed = string;

export interface Params {
    readonly diameter:Diameter ;
    readonly offsetX: OffsetX;
    readonly offsetY: OffsetY;
    readonly seed: Seed;
}

const {actions, reducer} = createSlice({
    name: 'params',
    initialState: {
        diameter:'512',
        offsetX: "0",
        offsetY: "0",
        seed: "0",
    } as Params,
    reducers: {
        setDiameter(state, action: PayloadAction<Diameter>) {
            state.diameter = action.payload
        },
        setOffsetX(state, action: PayloadAction<OffsetX>) {
            state.offsetX = action.payload
        },
        setOffsetY(state, action: PayloadAction<OffsetY>) {
            state.offsetY = action.payload
        },
        setSeed(state, action: PayloadAction<Seed>) {
            state.seed = action.payload
        }
    }
});

export const { setSeed, setDiameter,setOffsetX,setOffsetY } = actions;
export const paramsReducer = reducer;
