import { isTableContent } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isTableContent', () => {
	for (const type of ['tableRow']) {
		it('should return true for block content', () => {
			expect(isTableContent({ type })).toBe(true);
		});
	}
});
