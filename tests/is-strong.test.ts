import { isStrong } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isStrong', () => {
	it('returns `true` for a strong node', () => {
		expect(isStrong({ type: 'strong', children: [] })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'strong',
		42,
		[],
		{},
		{ type: 'strong' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isStrong(value)).toBe(false);
		});
	}
});
