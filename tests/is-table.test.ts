import { isTable } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isTable', () => {
	it('returns `true` for a table node', () => {
		expect(isTable({ type: 'table', children: [] })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'table',
		42,
		[],
		{},
		{ type: 'table' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isTable(value)).toBe(false);
		});
	}
});
