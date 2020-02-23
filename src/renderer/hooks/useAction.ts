import { ActionCreator } from 'redux';
import { useDispatch } from 'react-redux';

export  const useAction = <T>(actionCreator: ActionCreator<T>) => {
    const dispatch = useDispatch();
    return (payload: T) => dispatch(actionCreator(payload))
};
