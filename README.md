# TypeScript Type Guards for Unist Nodes

This package provides TypeScript type guards for [Mdast](https://github.com/syntax-tree/mdast) nodes.

## Installation

```sh
npm install @accuser/mdast-util-type-guards
```

## Usage

```ts
import { isText } from '@accuser/mdast-util-type-guards';

const node = {
  type: 'text',
  value: 'Hello, world!'
};

if (isText(node)) {
  console.log('This is a valid Mdast Text node.');
}
```

## API

This package exports the identifiers:

- [`isAsscoiation`](api-isassociation)
- [`isBlockquote`](api-isblockquote)
- [`isBreak`](api-isbreak)
- [`isCode`](api-iscode)
- [`isDefinition`](api-isdefinition)
- [`isDelete`](api-isdelete)
- [`isEmphasis`](api-isemphasis)
- [`isFootnoteDefinition`](api-isfootnotedefinition)
- [`isFootnoteReference`](api-isfootnotereference)
- [`isHeading`](api-isheading)
- [`isHTML`](api-ishtml)
- [`isImage`](api-isimage)
- [`isImageReference`](api-isimagereference)
- [`isInlineCode`](api-isinlinecode)
- [`isLinkReference`](api-islinkreference)
- [`isLink`](api-islink)
- [`isList`](api-islist)
- [`isListItem`](api-islistitem)
- [`isLiteral`](api-isliteral)
- [`isNode`](api-isnode)
- [`isParagraph`](api-isparagraph)
- [`isParent`](api-isparent)
- [`isReference`](api-isreference)
- [`isResource`](api-isresource)
- [`isStrong`](api-isstrong)
- [`isTable`](api-istable)
- [`isTableCell`](api-istablecell)
- [`isTableRow`](api-istablerow)
- [`isText`](api-istext)
- [`isThematicBreak`](api-isthematicbreak)
- [`isYaml`](api-isyaml)

There is no default export.

### `isAssociation(node: unknown): node is Association`

Test if a given value is a valid Mdast `Association` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid node with an `Association`.

###### Example

```ts
import { isAssociation } from '@accuser/mdast-util-type-guards';

const node = {
  type: 'definition',
  identifier: 'foo'
  url: 'http://example.com'
};

if (isAssociation(node)) {
  console.log(node.identifier); // 'foo'
}
```

### `isBlockquote(node: unknown): node is Blockquote`

Test if a given value is a valid Mdast `Blockquote` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `Blockquote` node.

###### Example

```ts
import { isBlockquote } from '@accuser/mdast-util-type-guards';

const node = {
  type: 'blockquote',
  children: [
	{
	  type: 'paragraph',
	  children: [
		{
		  type: 'text',
		  value: 'Hello, world!'
		}
	  ]
	}
  ]
};

if (isBlockquote(node)) {
  console.log(node.children[0]); // { type: 'paragraph', children: [ { type: 'text', value: 'Hello, world!' } ] }
}
```

### `isBreak(node: unknown): node is Break`

Test if a given value is a valid Mdast `Break` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `Break` node.

###### Example

```ts
import { isBreak } from '@accuser/mdast-util-type-guards';

const node = {
  type: 'break'
};

if (isBreak(node)) {
  console.log('This is a valid Mdast Break node.');
}
```

### `isCode(node: unknown): node is Code`

Test if a given value is a valid Mdast `Code` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `Code` node.

### `isDefinition(node: unknown): node is Definition`

Test if a given value is a valid Mdast `Definition` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `Definition` node.

### `isDelete(node: unknown): node is Delete`

Test if a given value is a valid Mdast `Delete` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `Delete` node.

### `isEmphasis(node: unknown): node is Emphasis`

Test if a given value is a valid Mdast `Emphasis` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `Emphasis` node.

### `isFootnoteDefinition(node: unknown): node is FootnoteDefinition`

Test if a given value is a valid Mdast `FootnoteDefinition` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `FootnoteDefinition` node.

### `isFootnoteReference(node: unknown): node is FootnoteReference`

Test if a given value is a valid Mdast `FootnoteReference` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `FootnoteReference` node.

### `isHeading(node: unknown): node is Heading`

Test if a given value is a valid Mdast `Heading` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `Heading` node.

### `isHTML(node: unknown): node is HTML`

Test if a given value is a valid Mdast `HTML` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `HTML` node.

### `isImage(node: unknown): node is Image`

Test if a given value is a valid Mdast `Image` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `Image` node.

### `isImageReference(node: unknown): node is ImageReference`

Test if a given value is a valid Mdast `ImageReference` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `ImageReference` node.

### `isInlineCode(node: unknown): node is InlineCode`

Test if a given value is a valid Mdast `InlineCode` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `InlineCode` node.

### `isLinkReference(node: unknown): node is LinkReference`

Test if a given value is a valid Mdast `LinkReference` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `LinkReference` node.

### `isLink(node: unknown): node is Link`

Test if a given value is a valid Mdast `Link` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `Link` node.

### `isList(node: unknown): node is List`

Test if a given value is a valid Mdast `List` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `List` node.

### `isListItem(node: unknown): node is ListItem`

Test if a given value is a valid Mdast `ListItem` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `ListItem` node.

### `isLiteral(node: unknown): node is Literal`

Test is a given value is a valid Unist literal node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Unist literal node.

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

### `isParagraph(node: unknown): node is Paragraph`

Test if a given value is a valid Mdast `Paragraph` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `Paragraph` node.

### `isReference(node: unknown): node is Reference`

Test if a given value is a valid Mdast `Reference` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `Reference` node.

### `isResource(node: unknown): node is Resource`

Test if a given value is a valid Mdast `Resource` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `Resource` node.

### `isStrong(node: unknown): node is Strong`

Test if a given value is a valid Mdast `Strong` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `Strong` node.

### `isTable(node: unknown): node is Table`

Test if a given value is a valid Mdast `Table` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `Table` node.

### `isTableCell(node: unknown): node is TableCell`

Test if a given value is a valid Mdast `TableCell` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `TableCell` node.

### `isTableRow(node: unknown): node is TableRow`

Test if a given value is a valid Mdast `TableRow` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `TableRow` node.

### `isText(node: unknown): node is Text`

Test if a given value is a valid Mdast `Text` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `Text` node.

### `isThematicBreak(node: unknown): node is ThematicBreak`

Test if a given value is a valid Mdast `ThematicBreak` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `ThematicBreak` node.

### `isYaml(node: unknown): node is Yaml`

Test if a given value is a valid Mdast `Yaml` node.

###### Parameters

* `node` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `node` is a valid Mdast `Yaml` node.


## Tests

```sh
npm test
```

## License

[MIT](https://raw.githubusercontent.com/accuser/unist-util-type-guards/main/LICENSE)

[api-isassociation]: #isassociationnode-unknown-node-is-association
[api-isblockquote]: #isblockquotenode-unknown-node-is-blockquote
[api-isbreak]: #isbreaknode-unknown-node-is-break
[api-iscode]: #iscodenode-unknown-node-is-code
[api-isdefinition]: #isdefinitionnode-unknown-node-is-definition
[api-isdelete]: #isdeletenode-unknown-node-is-delete
[api-isemphasis]: #isemphasisnode-unknown-node-is-emphasis
[api-isfootnotedefinition]: #isfootnotedefinitionnode-unknown-node-is-footnotedefinition
[api-isfootnotereference]: #isfootnotereferencenode-unknown-node-is-footnotereference
[api-isheading]: #isheadingnode-unknown-node-is-heading
[api-ishtml]: #ishtmlnode-unknown-node-is-html
[api-isimage]: #isimagenode-unknown-node-is-image
[api-isimagereference]: #isimagereferencenode-unknown-node-is-imagereference
[api-isinlinecode]: #isinlinecodenode-unknown-node-is-inlinecode
[api-islinkreference]: #islinkreferencenode-unknown-node-is-linkreference
[api-islink]: #islinknode-unknown-node-is-link
[api-islist]: #islistnode-unknown-node-is-list
[api-islistitem]: #islistitemnode-unknown-node-is-listitem
[api-isliteral]: #isliteralnode-node-unknown-node-is-literal
[api-isnode]: #isnodenode-unknown-node-is-node
[api-isparagraph]: #isparagraphnode-unknown-node-is-paragraph
[api-isparent]: #isparentnode-node-unknown-node-is-parent
[api-isreference]: #isreferencenode-unknown-node-is-reference
[api-isresource]: #isresourcenode-unknown-node-is-resource
[api-isstrong]: #isstrongnode-unknown-node-is-strong
[api-istable]: #istablenode-unknown-node-is-table
[api-istablecell]: #istablecellnode-unknown-node-is-tablecell
[api-istablerow]: #istablerownode-unknown-node-is-tablerow
[api-istext]: #istextnode-unknown-node-is-text
[api-isthematicbreak]: #isthematicbreaknode-unknown-node-is-thematicbreak
[api-isyaml]: #isyamlnode-unknown-node-is-yaml
