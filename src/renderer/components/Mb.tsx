import * as React from 'react';
import { ReactElement } from 'react';
import { Maybe } from '../models/monads/Maybe';

export interface MbProps<T> {
    value: Maybe<T>;
    children: (value: T) => JSX.Element ;
    fallback: () => JSX.Element;
}

export function Mb<T>({ value, fallback, children  }: MbProps<T>):ReactElement {
    return value.caseOf({
        Just: children,
        Nothing: fallback
    });
}
