import { isYaml } from '@accuser/mdast-util-type-guards';
import { describe, expect, it } from 'vitest';

describe('isYaml', () => {
	it('returns `true` for a yaml node', () => {
		expect(isYaml({ type: 'yaml', value: 'key: value' })).toBe(true);
	});

	for (const value of [
		null,
		undefined,
		true,
		false,
		'yaml',
		42,
		[],
		{},
		{ type: 'yaml' },
		{ type: 'paragraph', children: [] }
	]) {
		it('returns `false`', () => {
			expect(isYaml(value)).toBe(false);
		});
	}
});
