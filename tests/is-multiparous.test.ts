import { isMultiparous } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isMultiparous', () => {
	it('returns `true` for a multiparous Parent node', () => {
		expect(
			isMultiparous({
				type: 'tree',
				children: [
					{ type: 'leaf', value: 'Leaf' },
					{ type: 'leaf', value: 'Leaf' }
				]
			})
		).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'tree',
		42,
		[],
		{},
		{ type: 'tree' },
		{ type: 'tree', children: [] },
		{ type: 'tree', children: [{ type: 'Leaf' }] }
	]) {
		it('returns `false`', () => {
			expect(isMultiparous(value)).toBe(false);
		});
	}
});
