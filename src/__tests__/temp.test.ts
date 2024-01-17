import { describe, expect, test } from '@jest/globals';

describe('barrels()', () => {
    test('returns activity log if successful', () => {
        const activityLog = ['/testDirectory/valid', '/testDirectory'];

        expect('string').toEqual(activityLog);
    });
});
