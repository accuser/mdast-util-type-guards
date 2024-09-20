import { isBlockquote } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isBlockquote', () => {
	it('returns `true` for a blockquote node', () => {
		expect(isBlockquote({ type: 'blockquote', children: [] })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'blockquote',
		42,
		[],
		{},
		{ type: 'blockquote' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false` for an non-string value', () => {
			expect(isBlockquote(value)).toBe(false);
		});
	}
});
