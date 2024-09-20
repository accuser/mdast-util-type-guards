import { isRoot } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isRoot', () => {
	it('returns `true` for a root node', () => {
		expect(isRoot({ type: 'root', children: [] })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'root',
		42,
		[],
		{},
		{ type: 'root' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isRoot(value)).toBe(false);
		});
	}
});
