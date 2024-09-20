import { isFootnoteDefinition } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isFootnoteDefinition', () => {
	it('returns `true` for a footnoteDefinition node', () => {
		expect(
			isFootnoteDefinition({ type: 'footnoteDefinition', identifier: 'foo', children: [] })
		).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'footnoteDefinition',
		42,
		[],
		{},
		{ type: 'footnoteDefinition' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isFootnoteDefinition(value)).toBe(false);
		});
	}

	for (const identifier of [null, undefined, true, false, 42]) {
		it('returns `false` for a node with an invalid children value', () => {
			const node = { type: 'footnoteDefinition', identifier, children: [] };
			expect(isFootnoteDefinition(node)).toBe(false);
		});
	}

	for (const children of [null, undefined, true, false, 42, {}]) {
		it('returns `false` for a node with an invalid children value', () => {
			const node = { type: 'footnoteDefinition', identifier: 'foo', children };
			expect(isFootnoteDefinition(node)).toBe(false);
		});
	}
});
