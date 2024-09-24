import { isNulliparous } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isNulliparous', () => {
	it('returns `true` for a nulliparous Parent node', () => {
		expect(isNulliparous({ type: 'tree', children: [] })).toBe(true);
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
		{ type: 'tree', children: [{ type: 'leaf' }] },
		{ type: 'tree', children: [{ type: 'leaf', value: 'Leaf' }] }
	]) {
		it('returns `false`', () => {
			expect(isNulliparous(value)).toBe(false);
		});
	}
});
