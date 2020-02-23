import { Button } from '@material-ui/core';
import * as React from 'react';
import { FormEvent, FunctionComponent } from 'react';
import { InputDiameter } from './InputDiameter';
import { InputSeed } from './InputSeed';
import { InputOffsetX } from './InputOffsetX';
import { InputOffsetY } from './inputOffsetY';
import './Sidebar.scss';

export const Sidebar: FunctionComponent = () => {
    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <form onSubmit={submitHandler}>
            <InputDiameter />
            <InputSeed />
            <InputOffsetX />
            <InputOffsetY />
            <Button variant="contained" fullWidth size="large" color="primary" type="submit">
                Отправить
            </Button>
        </form>
    );
};
