import { isNullOrUndefined } from "src/app/utils";
import { SimpleMatrix2d } from "../types";

/**
 * Проверяет, является ли переданная 2d матрица корректной (т.е. каждая строка имеет одинаковое
 * количество столбцов).
 * 
 * В случае корректности возвращает ее размерность и null если матрица не корректна
 * @param matrix 
 * @returns rows - количество строк и columns - количество столбцов { rows: number, columns: number } 
 */
export function isCorrect2dMatrix(matrix: SimpleMatrix2d): { rows: number, columns: number } | null {
    
    if (isNullOrUndefined(matrix) || !Array.isArray(matrix) || !Array.isArray(matrix[0])) {
        return null;
    }

    const sizes = { rows: matrix.length, columns: matrix[0].length };

    for (let rowIdx = 1; rowIdx < matrix.length; rowIdx++) {
        if (matrix[rowIdx].length !== sizes.columns) {
            return null;
        }
    }

    return sizes;
}
