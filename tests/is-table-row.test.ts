import { isTableRow } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isTableRow', () => {
	it('returns `true` for a tableRow node', () => {
		expect(isTableRow({ type: 'tableRow', children: [] })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'tableRow',
		42,
		[],
		{},
		{ type: 'tableRow' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isTableRow(value)).toBe(false);
		});
	}
});
