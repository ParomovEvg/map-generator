import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { ActionTypes } from '../actions/actionTypes';
import { RootState } from '../reducers';

export type StateTuple<T> = [ T, (params:T) => void ]

export const useGlobalState = <T>(
    type:ActionTypes,
    selector: (store: RootState) => T
): StateTuple<T> => {
    const value:T = useSelector<RootState, T>(selector);
    const dispatch = useDispatch();
    const setValue = useCallback((newValue: T) => {
        dispatch({
            type,
            value:newValue
        })
    },[type]);

    return [ value, setValue ];
};
