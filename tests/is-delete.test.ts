import { isDelete } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isDelete', () => {
	it('returns `true` for a delete node', () => {
		expect(isDelete({ type: 'delete', children: [] })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'delete',
		42,
		[],
		{},
		{ type: 'delete' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isDelete(value)).toBe(false);
		});
	}
});
