import { MathError } from "../classes";
import { SimpleVector2d } from "../types";
import { toRadians } from "./angle-radians.function";

/**
 * Вращает вектор на указанный угол вокруг начала координат
 * @param vector2d вектор
 * @param angle угол
 * @param radians передать true если angle передан в радианах. По умолчанию - false
 * @returns SimpleVector2d
 */
export function rotate2dVector(vector2d: SimpleVector2d, angle: number, radians: boolean = false): SimpleVector2d {
    if (!Array.isArray(vector2d) || vector2d?.length !== 2) {
        throw new MathError('Failed to rotate 2d vector: first argument is not type of SimpleVector2d')
    }

    const x = vector2d[0];
    const y = vector2d[1];

    if (radians) {
        return [
            x * Math.cos(angle) - y * Math.sin(angle),
            x * Math.sin(angle) + y * Math.cos(angle),
        ];
    }

    angle = toRadians(angle);

    return [
        x * Math.cos(angle) - y * Math.sin(angle),
        x * Math.sin(angle) + y * Math.cos(angle),
    ];
}
