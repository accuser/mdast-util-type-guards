import { isListContent } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isListContent', () => {
	for (const type of ['listItem']) {
		it('should return true for block content', () => {
			expect(isListContent({ type })).toBe(true);
		});
	}
});
