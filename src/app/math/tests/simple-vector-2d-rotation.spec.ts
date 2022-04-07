import { rotate2dVector, toDegrees } from "../functions";
import { SimpleVector2d } from "../types";

describe('rotate2dVector', () => {
    it("must rotate [1, 0] vector by 90 degrees", function () {
        const angle = 90;
        const vector: SimpleVector2d = [1, 0];

        expect(rotate2dVector(vector, angle, false).map(e => Math.trunc(e))).toEqual([0, 1]);
    });

    it("must rotate [1, 0] vector by 45 degrees", function () {
        const angle = 45;
        const vector: SimpleVector2d = [1, 0];

        const x = rotate2dVector(vector, angle, false)[0];
        const y = rotate2dVector(vector, angle, false)[1];

        expect(x).toBeCloseTo(Math.sqrt(2) / 2);
        expect(y).toBeCloseTo(Math.sqrt(2) / 2);
    });

    it("must rotate [1, 0] vector by PI/2 radians", function () {
        const angle = Math.PI / 2;
        const vector: SimpleVector2d = [1, 0];

        expect(rotate2dVector(vector, angle, true).map(e => Math.trunc(e))).toEqual([0, 1]);
    });

    it("must rotate [1, 0] vector by PI/4 radians", function () {
        const angle = Math.PI / 4;
        const vector: SimpleVector2d = [1, 0];

        const x = rotate2dVector(vector, angle, true)[0];
        const y = rotate2dVector(vector, angle, true)[1];

        expect(x).toBeCloseTo(Math.sqrt(2) / 2);
        expect(y).toBeCloseTo(Math.sqrt(2) / 2);
    });

    it("must rotate [0, 0] vector by 100500 radians", function () {
        const angle = 100500;
        const vector: SimpleVector2d = [0, 0];

        expect(rotate2dVector(vector, angle, true)).toEqual([0, 0]);
    });

    it("must rotate [1, 1] vector by 45 degrees", function () {
        const angle = 45;
        const vector: SimpleVector2d = [1, 1];

        const x = rotate2dVector(vector, angle, false)[0];
        const y = rotate2dVector(vector, angle, false)[1];

        expect(x).toBeCloseTo(0);
        expect(y).toBeCloseTo(Math.sqrt(2));
    });

    it("must rotate [1, 1] vector by -45 degrees", function () {
        const angle = -45;
        const vector: SimpleVector2d = [1, 1];

        const x = rotate2dVector(vector, angle, false)[0];
        const y = rotate2dVector(vector, angle, false)[1];

        expect(x).toBeCloseTo(Math.sqrt(2));
        expect(y).toBeCloseTo(0);
    });

    it("must throw in case of invalid vector", function () {
        const angle = 45;
        const vector: SimpleVector2d = [1, 1, 2] as any;

        expect(() => rotate2dVector(vector, angle)).toThrow();
    });
});