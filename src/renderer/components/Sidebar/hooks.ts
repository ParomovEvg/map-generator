import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
    Diameter,
    OffsetX,
    OffsetY,
    Params,
    Seed,
    setDiameter,
    setOffsetX,
    setOffsetY,
    setSeed
} from '../../slices/params';
import { useAction } from '../../hooks/useAction';

export const useDiameter = () => {
    return [
        useSelector<RootState, Diameter>(state => state.params.diameter),
        useAction(setDiameter)
    ];
};

export const useOffsetX = () => {
    const dispatch = useDispatch();
    return [useSelector<RootState, OffsetX>(state => state.params.offsetX), setOffsetX];
};

export const useOffsetY = () => {
    const dispatch = useDispatch();
    return [useSelector<RootState, OffsetY>(state => state.params.offsetY), setOffsetY];
};

export const useSeed = () => {
    const dispatch = useDispatch();
    return [useSelector<RootState, Seed>(state => state.params.seed), setSeed];
};

export const useParams = (): Params => useSelector<RootState, Params>(state => state.params);
