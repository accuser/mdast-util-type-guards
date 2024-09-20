import { isImage } from '@accuser/mdast-util-type-guards';
import { Image } from 'mdast';
import { describe, expect, it } from 'vitest';

describe('isImage', () => {
	it('returns `true` for an image node', () => {
		const node: Image = {
			type: 'image',
			url: 'https://example.com/image.jpg'
		};

		expect(isImage(node)).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'image',
		42,
		[],
		{},
		{ type: 'image' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isImage(value)).toBe(false);
		});
	}
});
