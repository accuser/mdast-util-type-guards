import { isRowContent } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isRowContent', () => {
	for (const type of ['tableCell']) {
		it('should return true for block content', () => {
			expect(isRowContent({ type })).toBe(true);
		});
	}
});
