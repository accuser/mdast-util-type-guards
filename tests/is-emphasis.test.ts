import { isEmphasis } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isEmphasis', () => {
	it('returns `true` for a emphasis node', () => {
		expect(isEmphasis({ type: 'emphasis', children: [] })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'emphasis',
		42,
		[],
		{},
		{ type: 'emphasis' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isEmphasis(value)).toBe(false);
		});
	}
});
