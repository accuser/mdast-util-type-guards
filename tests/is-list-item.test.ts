import { isListItem } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isListItem', () => {
	it('returns `true` for a listItem node', () => {
		expect(
			isListItem({
				type: 'listItem',
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
		{ type: 'listItem' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isListItem(value)).toBe(false);
		});
	}
});
