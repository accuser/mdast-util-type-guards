import { isHtml } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isHtml', () => {
	it('returns `true` for a html node', () => {
		expect(isHtml({ type: 'html', value: '<p>Hello, World!</p>' })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'html',
		42,
		[],
		{},
		{ type: 'html' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isHtml(value)).toBe(false);
		});
	}
});
