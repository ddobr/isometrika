import { scaleVector2d } from "../functions";
import { SimpleVector2d } from "../types"

describe('scaleVector2d', () => {
    it('must scale [1, 1] vector by 0.5', () => {
        const vector: SimpleVector2d = [1, 1];
        const result = scaleVector2d(vector, 0.5);

        const x = result[0];
        const y = result[1];

        expect(x).toBeCloseTo(0.5);
        expect(y).toBeCloseTo(0.5);
    });

    it('must scale [1, 1] vector by 2', () => {
        const vector: SimpleVector2d = [1, 1];
        const result = scaleVector2d(vector, 2);

        const x = result[0];
        const y = result[1];

        expect(x).toBeCloseTo(2);
        expect(y).toBeCloseTo(2);
    });

    it('must scale [1, 1] vector by 2 x', () => {
        const vector: SimpleVector2d = [1, 1];
        const result = scaleVector2d(vector, { x: 2 });

        const x = result[0];
        const y = result[1];

        expect(x).toBeCloseTo(2);
        expect(y).toBeCloseTo(1);
    });

    it('must scale [2, 1] vector by 0.3', () => {
        const vector: SimpleVector2d = [2, 1];
        const result = scaleVector2d(vector, 0.3);

        const x = result[0];
        const y = result[1];

        expect(x).toBeCloseTo(2 * 0.3);
        expect(y).toBeCloseTo(1 * 0.3);
    });
});
