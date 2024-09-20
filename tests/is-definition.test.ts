import { isDefinition } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isDefinition', () => {
	it('returns `true` for a definition node', () => {
		expect(
			isDefinition({ type: 'definition', identifier: 'foo', url: 'https://example.com' })
		).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'definition',
		42,
		[],
		{},
		{ type: 'definition' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isDefinition(value)).toBe(false);
		});
	}
});
