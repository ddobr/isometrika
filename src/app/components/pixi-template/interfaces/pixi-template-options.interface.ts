import { Application } from "pixi.js";

export interface IPixiTemplateOptions {
    width?: number,
    height?: number,
    onReady?: (app: Application) => void,
    onResize?: (app: Application) => void,
    alpha?: number
    grid?: IsometricGrid
}

type IsometricGrid = {
    type: 'isometric',  
    color?: 'black' | 'white' | 'grey',
    distance?: 16 | 32 | 64,
    drawVerticalLines?: boolean
}