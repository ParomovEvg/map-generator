import * as React from 'react';
import { ChangeEvent, FunctionComponent } from 'react';
import { TextField } from '@material-ui/core';
import {  useOffsetY } from './hooks';
import { OffsetY } from '../../actions/paramsActions';

export const InputOffsetY: FunctionComponent = () => {
    const [offsetY, setOffsetY] = useOffsetY();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value as OffsetY;
            setOffsetY(value);
    };
    return (
        <div className="sidebar__input-wrapper">
            <TextField
                id="params-offset-y"
                label="Offset Y"
                value={offsetY}
                onChange={handleChange}
                variant="outlined"
                inputProps={{type:"number"}}
            />
        </div>
    );
};
