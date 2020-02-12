import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { Grid } from '@material-ui/core';
import './Application.scss';
import { useGlobalState } from '../hooks/useGlobalState';
import { Diameter } from '../actions/paramsActions';
import { ActionTypes } from '../actions/actionTypes';

const Application = () => (
    <Grid container className="app__wrapper">
       <Grid item className="app__sidebar-wrapper">
           {() => {
               const [diameter, setDiameter] = useGlobalState<Diameter>(ActionTypes.SET_DIAMETER, store => store.params.diameter);
           }}
       </Grid>
       <Grid item className="app__map-wrapper">
           hello2
       </Grid>
    </Grid>
);

export default hot(Application);
