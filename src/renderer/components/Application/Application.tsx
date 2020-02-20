import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { Container, Grid } from '@material-ui/core';
import './Application.scss';
import { Map } from '../Map/Map';
import { SquareRect, useSquare } from './hooks';
import { Mb } from '../Mb';
import { Sidebar } from '../Sidebar/Sidebar';

const Application = () => {
    const [ref, rect] = useSquare();
    return (
        <Grid container className="app__wrapper">
            <Grid item className="app__sidebar-wrapper">
                <Sidebar />
            </Grid>
            <Grid innerRef={ref} item className="app__map-wrapper">
                <Mb<DOMRectReadOnly> value={rect} fallback={() => <div />}>
                    {r => <Map rect={r} />}
                </Mb>
            </Grid>
        </Grid>
    );
};

export default hot(Application);
