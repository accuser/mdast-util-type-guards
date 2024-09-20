import { isParagraph } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isParagraph', () => {
	it('returns `true` for a paragraph node', () => {
		expect(isParagraph({ type: 'paragraph', children: [] })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'paragraph',
		42,
		[],
		{},
		{ type: 'paragraph' }
	]) {
		it('returns `false` for an non-string value', () => {
			expect(isParagraph(value)).toBe(false);
		});
	}
});
