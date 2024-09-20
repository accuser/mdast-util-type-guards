import { isTableCell } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isTableCell', () => {
	it('returns `true` for a tableCell node', () => {
		expect(isTableCell({ type: 'tableCell', children: [] })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'tableCell',
		42,
		[],
		{},
		{ type: 'tableCell' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isTableCell(value)).toBe(false);
		});
	}
});
