import { Dispatch, MutableRefObject, useEffect, useRef, useState } from 'react';
import { Maybe } from '../models/monads/Maybe';

export const useRefMb = <T>():[Maybe<T>, MutableRefObject<T>] => {

    const ref = useRef<T>();
    type RefMb = Maybe<T>
    const [state, setState] = useState<RefMb>(Maybe.nothing());

    useEffect(()=>{
        if(ref.current){
            setState(Maybe.just<T>(ref.current))
        } else {
            setState(Maybe.nothing())
        }
    },[ref?.current]);

    return [state, ref as MutableRefObject<T>]
};


export const useStateMb = <T>():[Maybe<T>, Dispatch<T>] => {
    const [state, setState] = useState<T>();

    let result: Maybe<T>;

    if(state === undefined){
        result = Maybe.nothing();
    } else {
        result = Maybe.just(state)
    }
    return [result, setState]
};
