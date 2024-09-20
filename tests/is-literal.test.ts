import { isLiteral } from '@accuser/unist-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isList', () => {
	it('returns `true` for a literal node', () => {
		expect(
			isLiteral({
				type: 'leaf',
				value: 'value'
			})
		).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'leaf',
		42,
		[],
		{},
		{ type: 'leaf' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isLiteral(value)).toBe(false);
		});
	}
});
