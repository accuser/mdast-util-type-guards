import { isBlockContent } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isBlockContent', () => {
	for (const type of [
		'blockquote',
		'code',
		'heading',
		'html',
		'list',
		'paragraph',
		'table',
		'thematicBreak'
	]) {
		it('should return true for block content', () => {
			expect(isBlockContent({ type })).toBe(true);
		});
	}
});
