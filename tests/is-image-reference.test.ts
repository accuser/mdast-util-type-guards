import { isImageReference } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isImageReference', () => {
	for (const referenceType of ['collapsed', 'full', 'shortcut']) {
		it('returns `true` for a imageReference node', () => {
			expect(
				isImageReference({
					type: 'imageReference',
					identifier: 'foo',
					referenceType
				})
			).toBe(true);
		});
	}

	for (const value of [
		null,
		undefined,
		true,
		false,
		'imageReference',
		42,
		[],
		{},
		{ type: 'paragraph', children: [] },
		{ type: 'imageReference' }
	]) {
		it('returns `false`', () => {
			expect(isImageReference(value)).toBe(false);
		});
	}
});
