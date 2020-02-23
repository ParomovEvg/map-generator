import * as React from 'react';
import { ChangeEvent, FunctionComponent } from 'react';
import { TextField } from '@material-ui/core';
import { useSeed } from './hooks';
import { Seed } from '../../slices/params';

export const InputSeed: FunctionComponent = () => {
    const [seed, setSeed] = useSeed();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value as Seed;
        if (!Number.isNaN(parseInt(value, 10)) || value === '') {
            setSeed(value);
        }
    };
    return (
        <div className="sidebar__input-wrapper">
            <TextField
                id="params-seed"
                label="Seed"
                value={seed}
                onChange={handleChange}
                variant="outlined"
                inputProps={{ type: 'number' }}
            />
        </div>
    );
};
