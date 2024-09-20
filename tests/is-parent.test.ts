import { isParent } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isParent', () => {
	it('returns `true` for a Node node', () => {
		expect(isParent({ type: 'tree', children: [] })).toBe(true);
	});

	for (const value of [null, undefined, true, false, 'tree', 42, [], {}, { type: 'tree' }]) {
		it('returns `false`', () => {
			expect(isParent(value)).toBe(false);
		});
	}
});
