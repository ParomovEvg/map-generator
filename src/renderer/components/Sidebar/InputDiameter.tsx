import * as React from 'react';
import { ChangeEvent, FunctionComponent } from 'react';
import { MenuItem, Select, TextField } from '@material-ui/core';
import { useDiameter } from './hooks';
import { Diameter } from '../../actions/paramsActions';

export const InputDiameter: FunctionComponent = () => {
    const [diameter, setDiameter] = useDiameter();

    const options: Array<Diameter> = ["512", "1024", "2048", "4096", "8192"];

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value as Diameter;
        if(options.includes(value)){
            setDiameter(value);
        }
    };

    return (
        <div className="sidebar__input-wrapper">
            <TextField
                id="params-diameter"
                select
                label="Diameter"
                value={diameter}
                onChange={handleChange}
                variant="outlined"
                fullWidth
            >
                {options.map(option => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    );
};
