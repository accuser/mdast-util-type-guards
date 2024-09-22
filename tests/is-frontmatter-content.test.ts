import { isFrontmatterContent } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isFrontmatterContent', () => {
	for (const type of ['yaml']) {
		it('should return true for block content', () => {
			expect(isFrontmatterContent({ type })).toBe(true);
		});
	}
});
