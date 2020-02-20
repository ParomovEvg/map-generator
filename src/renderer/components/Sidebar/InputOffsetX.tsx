import * as React from 'react';
import { ChangeEvent, FunctionComponent } from 'react';
import { TextField } from '@material-ui/core';
import { useOffsetX } from './hooks';
import {  OffsetX } from '../../actions/paramsActions';


export const InputOffsetX: FunctionComponent = () => {
    const [offsetX, setOffsetX] = useOffsetX();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value as OffsetX;
        setOffsetX(value);
    };
    return (
        <div className="sidebar__input-wrapper">
            <TextField
                id="params-offset-x"
                label="Offset X"
                value={offsetX}
                onChange={handleChange}
                variant="outlined"
                inputProps={{type:"number"}}
            />
        </div>
    );
};
