import { isResource } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isResource', () => {
	for (const referenceType of ['shortcut', 'collapsed', 'full']) {
		it('returns `true` for a resource node', () => {
			expect(isResource({ type: 'leaf', url: 'https://example.com' })).toBe(true);
		});
	}

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
			expect(isResource(value)).toBe(false);
		});
	}
});
