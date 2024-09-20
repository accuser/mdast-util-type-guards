import { isAssociation } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isAssociation', () => {
	it('returns `true` for a node that implements the Association interface', () => {
		const node = { type: 'definition', identifier: 'foo', url: 'https://example.com' };
		expect(isAssociation(node)).toBe(true);
	});

	it('returns `false` for a node that does not implement the Association interface', () => {
		const node = { type: 'paragraph', children: [] };
		expect(isAssociation(node)).toBe(false);
	});
});
