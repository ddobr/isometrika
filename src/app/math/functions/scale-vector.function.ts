import { isNullOrUndefined } from "../../utils";
import { MathError } from "../classes";
import { SimpleVector2d } from "../types";

/**
 * Масштабирует двумерный вектор 
 * @param vector2d двумерный вектор
 * @param scale фактор
 * @returns двумерный вектор
 */
export function scaleVector2d(vector2d: SimpleVector2d, scale: number | { x?: number, y?: number }): SimpleVector2d {

    if (!Array.isArray(vector2d) || vector2d?.length !== 2) {
        throw new MathError('Failed to scale 2d vector: first argument is not type of SimpleVector2d')
    }

    if (typeof scale === 'number') {
        return [vector2d[0] * scale, vector2d[1] * scale];
    }

    if (isNullOrUndefined(scale.x)) {
        scale.x = 1;
    }

    if (isNullOrUndefined(scale.y)) {
        scale.y = 1;
    }

    return [vector2d[0] * scale.x! , vector2d[1] * scale.y!];
}