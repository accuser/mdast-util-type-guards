import { isBreak } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isBreak', () => {
	it('returns `true` for a break node', () => {
		expect(isBreak({ type: 'break' })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'break',
		42,
		[],
		{},
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isBreak(value)).toBe(false);
		});
	}
});
