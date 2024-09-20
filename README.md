# TypeScript Type Guards for Unist Nodes

This package provides TypeScript type guards for [Unist](https://github.com/syntax-tree/unist) nodes.

## Installation

```sh
npm install @accuser/unist-util-type-guards
```

## Usage

```ts
import { isNode } from '@accuser/unist-util-type-guards';

const node = {
  type: 'text',
  value: 'Hello, world!'
};

if (isNode(node)) {
  console.log('This is a valid Unist node.');
}
```

## API

This package exports the identifiers [`isNode`](api-isnode), [`isParent`](api-isparent), and [`isLiteral`](api-isliteral). There is no default export.

### `isNode(node: unknown): node is Node`

Test is a given value is a valid Unist node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Unist node.

### `isParent(node: unknown): node is Parent`

Test is a given value is a valid Unist parent node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Unist parent node.

### `isLiteral(node: unknown): node is Literal`

Test is a given value is a valid Unist literal node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Unist literal node.

## Tests

```sh
npm test
```

## License

[MIT](https://raw.githubusercontent.com/accuser/unist-util-type-guards/main/LICENSE)

[api-isnode]: #isnodenode-unknown-node-is-node
[api-isparent]: #isparentnode-node-unknown-node-is-parent
[api-isliteral]: #isliteralnode-node-unknown-node-is-literal
