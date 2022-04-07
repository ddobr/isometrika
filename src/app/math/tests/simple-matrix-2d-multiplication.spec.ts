import { } from 'jasmine';
import { MathError } from '../classes';
import { multiply2dMatrices } from '../functions';
import { SimpleMatrix2d } from '../types';


describe('multiply2dMatrices', () => {
    it("Must correctly multiply two 2x2 matrices", function () {
        let left: SimpleMatrix2d = [
            [1, 2],
            [3, 4]
        ];

        let right: SimpleMatrix2d = [
            [5, 6],
            [7, 8]
        ]

        expect(multiply2dMatrices(left, right)).toEqual([
            [19, 22],
            [43, 50],
        ]);
    });

    it("Must correctly multiply 2x2 and 2x3 matrices", function () {
        let left: SimpleMatrix2d = [
            [1, 2],
            [3, 4]
        ];

        let right: SimpleMatrix2d = [
            [5, 6, 7],
            [8, 9, 10]
        ]

        expect(multiply2dMatrices(left, right)).toEqual([
            [21, 24, 27],
            [47, 54, 61],
        ]);
    });

    it("Must correctly multiply 2x2 and 2x1 matrices", function () {
        let left: SimpleMatrix2d = [
            [1, 2],
            [3, 4]
        ];

        let right: SimpleMatrix2d = [
            [5],
            [6]
        ]

        expect(multiply2dMatrices(left, right)).toEqual([
            [17],
            [39]
        ]);
    });

    it("Must correctly multiply 1x3 and 3x1 matrices", function () {
        let left: SimpleMatrix2d = [
            [10, 11, 12]
        ];

        let right: SimpleMatrix2d = [
            [13],
            [14],
            [15],
        ]

        expect(multiply2dMatrices(left, right)).toEqual([
            [464],
        ]);
    });

    it("Must throw MathError in case of 1x3 and 2x3 multiplication", function () {
        let left: SimpleMatrix2d = [
            [10, 11, 12]
        ];

        let right: SimpleMatrix2d = [
            [13, 0, 3],
            [14, 0, 3],
        ]

        expect(function () { multiply2dMatrices(left, right) }).toThrow(new MathError(
            `
            Failed to multiply: number of columns in left matrix does not equal to number of rows in right matrix.
            Left matrix size: 1x3. Right matrix size: 2x3.
            `
        ));
    });

    it("Must correctly multiply 3x1 and 1x3 matrices with floating point numbers", function () {
        let left: SimpleMatrix2d = [
            [1.1],
            [1.21],
            [1.221]
        ];

        let right: SimpleMatrix2d = [
            [1.02, 1.44, 23.21]
        ]

        // jasmine does not provide float precision in objects out of the box. this is only what i came up with :(
        expect(multiply2dMatrices(left, right).flat().map(e => e.toPrecision(7))).toEqual([
            ['1.122000', '1.584000', '25.53100'],
            ['1.234200', '1.742400', '28.08410'],
            ['1.245420', '1.758240', '28.33941'],
        ].flat());
    });

    it("Must throw MathError in case of weird matrices", function () {
        let left: SimpleMatrix2d = [
            [10, 11, 12],
            [10, 11],
        ];

        let right: SimpleMatrix2d = [
            [13, 0, 3],
            [14, 0, 3],
            [14, 0, 3],
        ]

        expect(function () { multiply2dMatrices(left, right) }).toThrow(new MathError(`Failed to multiply: tried to multiply invalid matrices`));
    });
});