import { MathError } from "../classes";
import { SimpleVector2d } from "../types";

/**
 * Переводит вектор из изометрической в декартову систему координат
 * @param vector 
 */
export function toCartesian2d(vector: SimpleVector2d): SimpleVector2d {
    if (!Array.isArray(vector) || vector?.length !== 2) {
        throw new MathError('Failed to convert from isometric to cartesian: first argument is not type of SimpleVector2d')
    }

    const x = vector[0]; 
    const y = vector[1];

    return [
        x - y,
        (x + y) * 0.5
    ]
}

export function toIsometric2d(vector: SimpleVector2d): SimpleVector2d {
    if (!Array.isArray(vector) || vector?.length !== 2) {
        throw new MathError('Failed to convert from cartesian to isometric: first argument is not type of SimpleVector2d')
    }

    const x = vector[0]; 
    const y = vector[1];

    return [
        y + 0.5 * x,
        y - 0.5 * x
    ]
}

/*
Из первой функции
1. x = Tx - Ty
2. y = 0.5Tx + 0.5Ty

Умножим второе (2.) равенство на 2 и выведем Tx
2y = Tx + Ty
Tx = 2y - Ty

Подставим Tx в первое (1.) равенство
x = 2y - 2Ty
Ty = y - 0.5x // Вывели Ty

Подставим это в Tx = 2y - Ty
Tx = y + 0.5x // Вывели Tx
*/