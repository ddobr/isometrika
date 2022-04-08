import { rotate2dVector, scaleVector2d } from "../functions";
import { toCartesian2d, toIsometric2d } from "../functions/cartesian-isometric.function";
import { SimpleVector2d } from "../types";

describe('toCartesian2d', () => {
    it('must convert from isometric [2, 1] to cartesian', () => {
        const isoVector: SimpleVector2d = [1, 1];
        const cartVector = toCartesian2d(isoVector);

        // 1. Вращаем вектор против часовой стрелки на 45 градусов
        // 2. Результат умножаем на 1 / Math.sqrt(2)
        const expected = scaleVector2d(rotate2dVector(isoVector, 45), { y: 1 / (Math.sqrt(2)), x: Math.sqrt(2) });

        // X
        expect(cartVector[0]).toBeCloseTo(expected[0]);
        // Y
        expect(cartVector[1]).toBeCloseTo(expected[1]);
    });

    it('must convert from isometric [1, 1] to cartesian', () => {
        const isoVector: SimpleVector2d = [1, 1];
        const cartVector = toCartesian2d(isoVector);

        // 1. Вращаем вектор против часовой стрелки на 45 градусов
        // 2. Результат умножаем на 1 / Math.sqrt(2)
        const expected = scaleVector2d(rotate2dVector(isoVector, 45), { y: 1 / (Math.sqrt(2)), x: Math.sqrt(2) });

        // X
        expect(cartVector[0]).toBeCloseTo(expected[0]);
        // Y
        expect(cartVector[1]).toBeCloseTo(expected[1]);
    });

    it('must convert from isometric [1, 0] to cartesian', () => {
        const isoVector: SimpleVector2d = [1, 0];
        const cartVector = toCartesian2d(isoVector);

        // 1. Вращаем вектор против часовой стрелки на 45 градусов
        // 2. Результат умножаем на 1 / Math.sqrt(2)
        const expected = scaleVector2d(rotate2dVector(isoVector, 45), { y: 1 / (Math.sqrt(2)), x: Math.sqrt(2) });

        // X
        expect(cartVector[0]).toBeCloseTo(expected[0]);
        // Y
        expect(cartVector[1]).toBeCloseTo(expected[1]);
    });

    it('must convert from isometric [0, -1] to cartesian', () => {
        const isoVector: SimpleVector2d = [0, -1];
        const cartVector = toCartesian2d(isoVector);

        // 1. Вращаем вектор против часовой стрелки на 45 градусов
        // 2. Результат умножаем на 1 / Math.sqrt(2)
        const expected = scaleVector2d(rotate2dVector(isoVector, 45), { y: 1 / (Math.sqrt(2)), x: Math.sqrt(2) });

        // X
        expect(cartVector[0]).toBeCloseTo(expected[0]);
        // Y
        expect(cartVector[1]).toBeCloseTo(expected[1]);
    });
});

describe('toIsometric2d', () => {
    it('must convert from isometric to cartesian and then back to isometric with no errors', () => {
        const isoVector: SimpleVector2d = [0, -1];
        const cartVector = toCartesian2d(isoVector);

        const backToIso = toIsometric2d(cartVector);

        // X
        expect(backToIso[0]).toBeCloseTo(isoVector[0]);
        // Y
        expect(backToIso[1]).toBeCloseTo(isoVector[1]);
    });

    it('must convert from isometric to cartesian and then back to isometric with no errors', () => {
        const isoVector: SimpleVector2d = [78, 1221];
        const cartVector = toCartesian2d(isoVector);

        const backToIso = toIsometric2d(cartVector);

        // X
        expect(backToIso[0]).toBeCloseTo(isoVector[0]);
        // Y
        expect(backToIso[1]).toBeCloseTo(isoVector[1]);
    })
});
