import { isNullOrUndefined } from "../../utils";
import { MathError } from "../classes";
import { SimpleMatrix2d } from "../types";
import { isCorrect2dMatrix } from "./is-correct-matrix.function";

/**
 * Умножает две двумерные матрицы. Если матрицы невозможно умножить - бросает исключение типа ```MathError```
 * @param left левый операнд
 * @param right правый операнд
 * @returns матрица
 */
export function multiply2dMatrices(left: SimpleMatrix2d, right: SimpleMatrix2d): SimpleMatrix2d {
    const aSize = isCorrect2dMatrix(left)!;
    const bSize = isCorrect2dMatrix(right)!;

    if (isNullOrUndefined(aSize) || isNullOrUndefined(bSize) ) {
        throw new MathError('Failed to multiply: tried to multiply invalid matrices')
    }

    if (aSize.columns !== bSize.rows) {
        throw new MathError(
            `
            Failed to multiply: number of columns in left matrix does not equal to number of rows in right matrix.
            Left matrix size: ${aSize.rows}x${aSize.columns}. Right matrix size: ${bSize.rows}x${aSize.columns}.
            `
        );
    }

    const resSize = { rows: aSize.rows, columns: bSize.columns };

    const result: number[][] = Array.apply(null, Array(resSize.rows))
        .map(function () { 
            return Array.apply(null, Array(resSize.columns))
    }) as number[][];


    for (let rowIdx = 0; rowIdx < resSize.rows; rowIdx++) {
        for (let columnIdx = 0; columnIdx < resSize.columns; columnIdx++) {
            const rowValues = left[rowIdx];
            const columnValues = getColumnValues(right, columnIdx);

            result[rowIdx][columnIdx] = rowValues.reduce((prev, cur, idx) => prev + cur * columnValues[idx], 0);
        }
    }

    return result;
}
/** INTERNAL ONLY
 * Возвращает значения в столбцах у матрицы
 */
function getColumnValues(matrix: SimpleMatrix2d, columnIdx: number): number[] {
    const res: number[] = Array.apply(null, Array(matrix[0].length)) as number[];

    matrix.forEach((element, i) => {
        res[i] = element[columnIdx];
    });

    return res;
}
