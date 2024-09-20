import { isThematicBreak } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isThematicBreak', () => {
	it('returns `true` for a thematicBreak node', () => {
		expect(isThematicBreak({ type: 'thematicBreak' })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'thematicBreak',
		42,
		[],
		{},
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isThematicBreak(value)).toBe(false);
		});
	}
});
