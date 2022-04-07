import {} from 'jasmine';
import { isCorrect2dMatrix } from '../functions';
import { SimpleMatrix2d } from '../types';

describe('isCorrect2dMatrix', () => {
  it("Must return sizes 2x3", function () {
    let m: SimpleMatrix2d = [
      [1, 2, 3],
      [3, 4, 5],
    ]

    expect(isCorrect2dMatrix(m)).toEqual({ rows: 2, columns: 3 });
  });

  it("Must return sizes 3x3", function () {
    let m: SimpleMatrix2d = [
      [1, 2, 3],
      [3, 4, 5],
      [6, 7, 8],
    ]

    expect(isCorrect2dMatrix(m)).toEqual({ rows: 3, columns: 3 });
  });

  it("Must return sizes 1x3", function () {
    let m: SimpleMatrix2d = [
      [1, 2, 3],
    ]

    expect(isCorrect2dMatrix(m)).toEqual({ rows: 1, columns: 3 });
  });

  it("Must return null in case of different columns", function () {
    let m: SimpleMatrix2d = [
      [1, 2, 3],
      [1, 2],
    ]

    expect(isCorrect2dMatrix(m)).toEqual(null);
  });

  it("Must return null in case of strange type", function () {
    let m: SimpleMatrix2d = [
      [1, 2, 3],
      '[1, 2]',
    ] as SimpleMatrix2d

    expect(isCorrect2dMatrix(m)).toEqual(null);
  });

  it("Must return null in case of even more strange type", function () {
    let m: SimpleMatrix2d = 'weirdness' as any;

    expect(isCorrect2dMatrix(m)).toEqual(null);
  });
});