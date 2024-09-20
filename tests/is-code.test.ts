import { isCode } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isCode', () => {
	it('returns `true` for a code node', () => {
		expect(isCode({ type: 'code', value: 'console.log("Hello, World!");' })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'code',
		42,
		[],
		{},
		{ type: 'code' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isCode(value)).toBe(false);
		});
	}
});
