
import { expect, test, describe } from '@jest/globals';
import { sum } from '../src/example';

describe('Example', () => {
    test('sum', () => {
        expect(sum(1, 2)).toBe(3);
    });
});

