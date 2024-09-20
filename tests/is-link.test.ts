import { isLink } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isLink', () => {
	it('returns `true` for a link node', () => {
		expect(
			isLink({
				type: 'link',
				children: [],
				url: 'https://example.com'
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
		{ type: 'link' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isLink(value)).toBe(false);
		});
	}
});
