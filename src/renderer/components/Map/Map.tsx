import * as React from 'react';
import { Paper } from '@material-ui/core';
import './Map.scss';
import { ReactElement } from 'react';
import { useDiameter, useParams } from '../Sidebar/hooks';

export interface MapProps {
    rect: DOMRectReadOnly;
}

const getRectParams = (rect: DOMRectReadOnly): number => {
    return Math.min(rect.height, rect.width);
};

export const Map = ({ rect }: MapProps):ReactElement => {
    const param = getRectParams(rect);
    const {diameter, offsetX, offsetY, seed} = useParams();
    return (
        <Paper
            className="map__paper"
            style={{
                height: param,
                width: param
            }}
        >
            {diameter} <br />
            {offsetX} <br />
            {offsetY}<br />
            {seed}<br />
        </Paper>
    );
};
