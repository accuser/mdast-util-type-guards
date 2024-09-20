import { isLinkReference } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isLinkReference', () => {
	for (const referenceType of ['full', 'collapsed', 'shortcut']) {
		it('returns `true` for a linkReference node', () => {
			expect(
				isLinkReference({
					type: 'linkReference',
					identifier: 'foo',
					referenceType,
					children: []
				})
			).toBe(true);
		});
	}

	for (const value of [
		null,
		undefined,
		true,
		false,
		'linkReference',
		42,
		[],
		{},
		{ type: 'linkReference' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isLinkReference(value)).toBe(false);
		});
	}
});
