import { isPhrasingContent } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isPhrasingContent', () => {
	for (const type of [
		'break',
		'delete',
		'emphasis',
		'footnoteReference',
		'html',
		'image',
		'imageReference',
		'inlineCode',
		'link',
		'linkReference',
		'strong',
		'text'
	]) {
		it('should return true for phrasing content', () => {
			expect(isPhrasingContent({ type })).toBe(true);
		});
	}
});
