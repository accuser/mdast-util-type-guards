import { isText } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isText', () => {
	it('returns `true` for a strong node', () => {
		expect(isText({ type: 'text', value: 'Hello, World!' })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'text',
		42,
		[],
		{},
		{ type: 'text' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isText(value)).toBe(false);
		});
	}
});
