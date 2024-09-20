import { isReference } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isReference', () => {
	for (const referenceType of ['shortcut', 'collapsed', 'full']) {
		it('returns `true` for a reference node', () => {
			expect(isReference({ type: 'reference', identifier: 'foo', referenceType })).toBe(true);
		});
	}

	for (const value of [
		null,
		undefined,
		true,
		false,
		'reference',
		42,
		[],
		{},
		{ type: 'reference' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isReference(value)).toBe(false);
		});
	}
});
