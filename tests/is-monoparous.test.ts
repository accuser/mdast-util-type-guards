import { isMonoparous } from '@accuser/unist-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isMonoparous', () => {
	it('returns `true` for a monoparous Parent node', () => {
		expect(isMonoparous({ type: 'tree', children: [{ type: 'leaf', value: 'Leaf' }] })).toBe(true);
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
		{
			type: 'tree',
			children: [
				{ type: 'leaf', value: 'Leaf' },
				{ type: 'leaf', value: 'Leaf' }
			]
		}
	]) {
		it('returns `false`', () => {
			expect(isMonoparous(value)).toBe(false);
		});
	}
});
