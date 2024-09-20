import { isHeading } from '@accuser/mdast-util-type-guards';
import { Heading } from 'mdast';
import { describe, expect, it } from 'vitest';

describe('isHeading', () => {
	for (const depth of [1, 2, 3, 4, 5, 6] as Heading['depth'][]) {
		it('returns `true` for a heading node', () => {
			expect(isHeading({ type: 'heading', depth, children: [] })).toBe(true);
		});

		for (const value of [
			null,
			undefined,
			true,
			false,
			'heading',
			42,
			[],
			{},
			{ type: 'heading' },
			{ type: 'paragraph', children: [] }
		]) {
			it('returns `false`', () => {
				expect(isHeading(value)).toBe(false);
			});
		}
	}
});
