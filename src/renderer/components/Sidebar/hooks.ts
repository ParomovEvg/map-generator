import { useSelector } from 'react-redux';
import { StateTuple, useGlobalState } from '../../hooks/useGlobalState';
import { Diameter, OffsetX, OffsetY, Seed } from '../../actions/paramsActions';
import { ActionTypes } from '../../actions/actionTypes';
import { ParamsState } from '../../reducers/paramsReducer';
import { RootState } from '../../reducers';
import { useCallback, useRef } from 'react';

export const useDiameter = (): StateTuple<Diameter> =>
    useGlobalState<Diameter>(ActionTypes.SET_DIAMETER, store => store.params.diameter);

export const useOffsetX = (): StateTuple<OffsetX> =>
    useGlobalState<OffsetX>(ActionTypes.SET_OFFSET_X, store => store.params.offsetX);

export const useOffsetY = (): StateTuple<OffsetY> =>
    useGlobalState<OffsetY>(ActionTypes.SET_OFFSET_Y, store => store.params.offsetY);

export const useSeed = (): StateTuple<Seed> =>
    useGlobalState<Seed>(ActionTypes.SET_SEED, store => store.params.seed);

export const useParams = (): ParamsState =>
    useSelector<RootState, ParamsState>(state => state.params);

export const useSubmitHandler = () => {
    const server = useRef()
    const params = useParams();
    return useCallback(() => {
        const isNumbers = Object.values(params).every(value => !Number.isNaN(parseInt(value, 10)));
        if (isNumbers){

        }
    }, [params]);
};
