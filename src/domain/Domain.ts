/* eslint-disable */
export interface Params {
    diameter: number;
    offsetX: number;
    offsetY: number;
    seed: number;
}
export interface Point {
    x: number;
    y: number;
}



export class Domain {
    private setCanvas(canvas: HTMLCanvasElement): void {
        console.log(canvas);
    }

    private setParams(param: Params): void {
        console.log(param)
    }

    private checkDataFromPoint(point: Point): void {
        console.log(point)
    }

    private sendData(){

    }
}
