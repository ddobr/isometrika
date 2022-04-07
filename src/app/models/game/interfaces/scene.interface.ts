import { Container } from "pixi.js";

export interface Scene extends Container {
    update(elapsedMS: number): void;
}