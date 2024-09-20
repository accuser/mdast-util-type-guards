import { isInlineCode } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isInlineCode', () => {
	it('returns `true` for a code node', () => {
		expect(isInlineCode({ type: 'inlineCode', value: 'console.log("Hello, World!");' })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'inlineCode',
		42,
		[],
		{},
		{ type: 'inlineCode' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isInlineCode(value)).toBe(false);
		});
	}
});
