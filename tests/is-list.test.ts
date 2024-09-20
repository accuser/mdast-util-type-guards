import { isList } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isList', () => {
	it('returns `true` for a list node', () => {
		expect(
			isList({
				type: 'list',
				children: []
			})
		).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'link',
		42,
		[],
		{},
		{ type: 'list' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isList(value)).toBe(false);
		});
	}
});
