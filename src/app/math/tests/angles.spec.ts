import { toDegrees, toRadians } from '../functions';

describe('toRadians', () => {
    it("Must return PI for 180 degrees", function () {
        const angle = 180;
        const result = toRadians(angle);

        expect(result).toEqual(Math.PI);
    });

    it("Must return 2 * PI for 360 degrees", function () {
        const angle = 360;
        const result = toRadians(angle);

        expect(result).toEqual(2 * Math.PI);
    });

    it("Must return PI / 3 for 60 degrees", function () {
        const angle = 60;
        const result = toRadians(angle);

        expect(result).toEqual(Math.PI / 3);
    });

    it("Must return (2 * Pi) / 3 for 120 degrees", function () {
        const angle = 120;
        const result = toRadians(angle);

        expect(result).toEqual(2 * Math.PI / 3);
    });

    it("Must return - (2 * Pi) / 3 for -120 degrees", function () {
        const angle = -120;
        const result = toRadians(angle);

        expect(result).toEqual(-2 * Math.PI / 3);
    });
});

describe('toDegrees', () => {
    it("Must return 180 for PI radians", function () {
        const angle = Math.PI;
        const result = toDegrees(angle);

        expect(result).toEqual(180);
    });

    it("Must return 360 for 2 * PI radians", function () {
        const angle = 2 * Math.PI;
        const result = toDegrees(angle);

        expect(result).toEqual(360);
    });

    it("Must return 120 for (2 * PI) / 3 radians", function () {
        const angle = 2 * Math.PI / 3;
        const result = toDegrees(angle);

        expect(result).toBeCloseTo(120);
    });

    it("Must return -120 for -(2 * PI) / 3 radians", function () {
        const angle = -2 * Math.PI / 3;
        const result = toDegrees(angle);

        expect(result).toBeCloseTo(-120);
    });
});