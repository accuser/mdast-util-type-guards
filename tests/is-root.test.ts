import { isRoot } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isRoot', () => {
	it('returns `true` for a root node', () => {
		expect(isRoot({ type: 'root', children: [] })).toBe(true);
	});

	it('returns `false` for a non-root node', () => {
		expect(isRoot({ type: 'paragraph', children: [] })).toBe(false);
	});
});
