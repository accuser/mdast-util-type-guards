import { isFootnoteReference } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isFootnoteReference', () => {
	it('returns `true` for a footnoteReference node', () => {
		expect(isFootnoteReference({ type: 'footnoteReference', identifier: 'foo' })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'footnoteReference',
		42,
		[],
		{},
		{ type: 'footnoteReference' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isFootnoteReference(value)).toBe(false);
		});
	}

	for (const identifier of [null, undefined, true, false, 42, {}]) {
		it('returns `false` for a node with an invalid identifer value', () => {
			const node = { type: 'footnoteReference', identifier };
			expect(isFootnoteReference(node)).toBe(false);
		});
	}
});
