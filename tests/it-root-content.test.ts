import { isRootContent } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isRootContent', () => {
	for (const type of [
		'break',
		'code',
		'definition',
		'delete',
		'emphasis',
		'footnoteDefinition',
		'footnoteReference',
		'heading',
		'html',
		'image',
		'imageReference',
		'inlineCode',
		'link',
		'linkReference',
		'list',
		'listItem',
		'paragraph',
		'strong',
		'table',
		'tableCell',
		'tableRow',
		'text',
		'thematicBreak',
		'yaml'
	]) {
		it('should return true for phrasing content', () => {
			expect(isRootContent({ type })).toBe(true);
		});
	}
});
