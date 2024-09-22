# TypeScript Type Guards for Unist Nodes

This package provides TypeScript type guards for [Mdast](https://github.com/syntax-tree/mdast) nodes.

## Installation

```sh
npm install @accuser/mdast-util-type-guards
```

## Usage

```ts
import { isText } from '@accuser/mdast-util-type-guards';

const value = {
  type: 'text',
  value: 'Hello, world!'
};

isNode(value); // true, value is Node
isLiteral(value); // true, value is Literal
isBlockContent(value); // false
isPhrasingContent(value); // true, value is PhrasingContent
isText(value); // true, value is Text
```

## API

This package exports the identifiers:

- [`isAsscoiation`](#isassociate)
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

### `isAssociation(value: unknown): value is Association`

Test if the given value is a valid [`Node`](https://github.com/syntax-tree/mdast/#node) with an `Association`(https://github.com/syntax-tree/mdast/#association).

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Node`](https://github.com/syntax-tree/mdast/#node) with an `Association`(https://github.com/syntax-tree/mdast/#association).

### `isBlockContent(value: unknown): value is BlockContent`

Test if the given value is a valid block content [`Node`](https://github.com/syntax-tree/mdast/#node).

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid block content [`Node`](https://github.com/syntax-tree/mdast/#node).

### `isBlockquote(value: unknown): value is Blockquote`

Test if the given value is a valid [`Blockquote`](https://github.com/syntax-tree/mdast/#blockquote) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Blockquote`](https://github.com/syntax-tree/mdast/#blockquote) node.

### `isBreak(value: unknown): value is Break`

Test if the given value is a valid [`Break`](https://github.com/syntax-tree/mdast/#break) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Break`](https://github.com/syntax-tree/mdast/#break) node.

### `isCode(value: unknown): value is Code`

Test if the given value is a valid [`Code`](https://github.com/syntax-tree/mdast/#code) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Code`](https://github.com/syntax-tree/mdast/#code) node.

### `isDefinitionContent(value: unknown): value is DefinitionContent`

Test if the given value is a valid definition content [`Node`](https://syntax-tree.github.io/mdast/#node).

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid definition content [`Node`](https://syntax-tree.github.io/mdast/#node).

### `isDefinition(value: unknown): value is Definition`

Test if the given value is a valid [`Definition`](https://github.com/syntax-tree/mdast/#definition) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Definition`](https://github.com/syntax-tree/mdast/#definition) node.

### `isDelete(value: unknown): value is Delete`

Test if a given value is a valid [`Delete`](https://github.com/syntax-tree/mdast/#delete) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Delete`](https://github.com/syntax-tree/mdast/#delete) node.

### `isEmphasis(value: unknown): value is Emphasis`

Test if a given value is a valid [`Emphasis`](https://github.com/syntax-tree/mdast/#emphasis) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Emphasis`](https://github.com/syntax-tree/mdast/#emphasis) node.

### `isFootnoteDefinition(value: unknown): value is FootnoteDefinition`

Test if a given value is a valid [`FootnoteDefinition`](https://github.com/syntax-tree/mdast/#footnotedefinition) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`FootnoteDefinition`](https://github.com/syntax-tree/mdast/#footnotedefinition) node.

### `isFootnoteReference(value: unknown): value is FootnoteReference`

Test if a given value is a valid [`FootnoteReference`](https://github.com/syntax-tree/mdast/#footnotereference) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`FootnoteReference`](https://github.com/syntax-tree/mdast/#footnotereference) node.

### `isHeading(value: unknown): value is Heading`

Test if a given value is a valid [`Heading`](https://github.com/syntax-tree/mdast/#heading) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Heading`](https://github.com/syntax-tree/mdast/#heading) node.

### `isHTML(value: unknown): value is HTML`

Test if a given value is a valid [`Html`](https://github.com/syntax-tree/mdast/#html) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Html`](https://github.com/syntax-tree/mdast/#html) node.

### `isImage(value: unknown): value is Image`

Test if a given value is a valid [`Image`](https://github.com/syntax-tree/mdast/#image) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Image`](https://github.com/syntax-tree/mdast/#image) node.

### `isImageReference(value: unknown): value is ImageReference`

Test if a given value is a valid [`Image`](https://github.com/syntax-tree/mdast/#imagereference) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Image`](https://github.com/syntax-tree/mdast/#imagereference) node.

### `isInlineCode(value: unknown): value is InlineCode`

Test if a given value is a valid [`InlineCode`](https://github.com/syntax-tree/mdast/#inlinecode) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`InlineCode`](https://github.com/syntax-tree/mdast/#inlinecode) node.

### `isLinkReference(value: unknown): value is LinkReference`

Test if a given value is a valid [`LinkReference`](https://github.com/syntax-tree/mdast/#linkreference) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`LinkReference`](https://github.com/syntax-tree/mdast/#linkreference) node.

### `isLink(value: unknown): value is Link`

Test if a given value is a valid [`Link`](https://github.com/syntax-tree/mdast/#link) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Link`](https://github.com/syntax-tree/mdast/#link) node.

### `isList(value: unknown): value is List`

Test if a given value is a valid [`List`](https://github.com/syntax-tree/mdast/#list) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`List`](https://github.com/syntax-tree/mdast/#list) node.

### `isListContent(value: unknown): value is ListContent`

Test if a given value is a valid list content [`Node`](https://github.com/syntax-tree/mdast/#node).

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid list content [`Node`](https://github.com/syntax-tree/mdast/#node).


### `isListItem(value: unknown): value is ListItem`

Test if a given value is a valid [`ListItem`](https://github.com/syntax-tree/mdast/#listitem) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`ListItem`](https://github.com/syntax-tree/mdast/#listitem) node.

### `isLiteral(value: unknown): value is Literal`

Test is a given value is a valid [`Literal`](https://github.com/syntax-tree/mdast/#literal) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid Unist literal value.

### `isNode(value: unknown): value is Node`

Test if a given value is a valid [`Node`](https://github.com/syntax-tree/mdast/#node).

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Node`](https://github.com/syntax-tree/mdast/#node).

### `isParagraph(value: unknown): value is Paragraph`

Test if a given value is a valid [`Paragraph`](https://github.com/syntax-tree/mdast/#paragraph) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Paragraph`](https://github.com/syntax-tree/mdast/#paragraph) node.

### `isParent(value: unknown): value is Parent`

Test is a given value is a valid [`Parent`](https://github.com/syntax-tree/mdast/#parent) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Parent`](https://github.com/syntax-tree/mdast/#parent) node.

### `isPhrasingContent(value: unknown): value is PhrasingContent`

Test if the given value is a valid phrasing content [`Node`](https://github.com/syntax-tree/mdast/#node).

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid phrasing content [`Node`](https://github.com/syntax-tree/mdast/#node).

### `isReference(value: unknown): value is Reference`

Test if a given value is a valid [`Node`](https://github.com/syntax-tree/mdast/#node) with a [`Reference`](https://github.com/syntax-tree/mdast/#reference).


###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Node`](https://github.com/syntax-tree/mdast/#node) with a [`Reference`](https://github.com/syntax-tree/mdast/#reference).

### `isResource(value: unknown): value is Resource`

Test if a given value is a valid [`Node`](https://github.com/syntax-tree/mdast/#node) with a [`Resource`](https://github.com/syntax-tree/mdast/#resource).

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Node`](https://github.com/syntax-tree/mdast/#node) with a [`Resource`](https://github.com/syntax-tree/mdast/#resource).

### `isRoot(value: unknown): value is Root`

Test if a given value is a valid [`Root`](https://github.com/syntax-tree/mdast/#root) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Root`](https://github.com/syntax-tree/mdast/#root) node.

### `isRootContent(value: unknown): value is RootContent`

Test if the given value is a valid root content [`Node`](https://github.com/syntax-tree/mdast/#node).

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid root content [`Node`](https://github.com/syntax-tree/mdast/#node).

### `isRowContent(value: unknown): value is RowContent`

Test if the given value is a valid row content [`Node`](https://github.com/syntax-tree/mdast/#node).

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid row content [`Node`](https://github.com/syntax-tree/mdast/#node).

### `isStrong(value: unknown): value is Strong`

Test if a given value is a valid [`Strong`](https://github.com/syntax-tree/mdast/#strong) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Strong`](https://github.com/syntax-tree/mdast/#strong) node.

### `isTable(value: unknown): value is Table`

Test if a given value is a valid [`Table`](https://github.com/syntax-tree/mdast/#table) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Table`](https://github.com/syntax-tree/mdast/#table) node.

### `isTableContent(value: unknown): value is TableContent`

Test if the given value is a valid table content [`Node`](https://github.com/syntax-tree/mdast/#node).

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid table content [`Node`](https://github.com/syntax-tree/mdast/#node).

### `isTableCell(value: unknown): value is TableCell`

Test if a given value is a valid [`TableCell`](https://github.com/syntax-tree/mdast/#tablecell) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`TableCell`](https://github.com/syntax-tree/mdast/#tablecell) node.

### `isTableRow(value: unknown): value is TableRow`

Test if a given value is a valid [`TableRow`](https://github.com/syntax-tree/mdast/#tablerow) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`TableRow`](https://github.com/syntax-tree/mdast/#tablerow) node.


### `isText(value: unknown): value is Text`

Test if a given value is a valid [`Text`](https://github.com/syntax-tree/mdast/#text) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Text`](https://github.com/syntax-tree/mdast/#text) node.

### `isThematicBreak(value: unknown): value is ThematicBreak`

Test if a given value is a valid [`ThematicBreak`](https://github.com/syntax-tree/mdast/#thematicbreak) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`ThematicBreak`](https://github.com/syntax-tree/mdast/#themeaticbreak) node.

### `isYaml(value: unknown): value is Yaml`

Test if a given value is a valid [`Yaml`](https://github.com/syntax-tree/mdast/#yaml) node.

###### Parameters

* `value` (`unknown`)
	- value to check.

###### Returns

Returns `true` if `value` is a valid [`Yaml`](https://github.com/syntax-tree/mdast/#yaml) node.

## Tests

```sh
npm test
```

## License

[MIT](https://raw.githubusercontent.com/accuser/unist-util-type-guards/main/LICENSE)

[api-isassociation]: #isassociationnode-unknown-value-is-association
[api-isblockquote]: #isblockquotenode-unknown-value-is-blockquote
[api-isbreak]: #isbreaknode-unknown-value-is-break
[api-iscode]: #iscodenode-unknown-value-is-code
[api-isdefinition]: #isdefinitionnode-unknown-value-is-definition
[api-isdelete]: #isdeletenode-unknown-value-is-delete
[api-isemphasis]: #isemphasisnode-unknown-value-is-emphasis
[api-isfootnotedefinition]: #isfootnotedefinitionnode-unknown-value-is-footnotedefinition
[api-isfootnotereference]: #isfootnotereferencenode-unknown-value-is-footnotereference
[api-isheading]: #isheadingnode-unknown-value-is-heading
[api-ishtml]: #ishtmlnode-unknown-value-is-html
[api-isimage]: #isimagenode-unknown-value-is-image
[api-isimagereference]: #isimagereferencenode-unknown-value-is-imagereference
[api-isinlinecode]: #isinlinecodenode-unknown-value-is-inlinecode
[api-islinkreference]: #islinkreferencenode-unknown-value-is-linkreference
[api-islink]: #islinknode-unknown-value-is-link
[api-islist]: #islistnode-unknown-value-is-list
[api-islistitem]: #islistitemnode-unknown-value-is-listitem
[api-isliteral]: #isliteralnode-value-unknown-value-is-literal
[api-isnode]: #isnodenode-unknown-value-is-value
[api-isparagraph]: #isparagraphnode-unknown-value-is-paragraph
[api-isparent]: #isparentnode-value-unknown-value-is-parent
[api-isreference]: #isreferencenode-unknown-value-is-reference
[api-isresource]: #isresourcenode-unknown-value-is-resource
[api-isstrong]: #isstrongnode-unknown-value-is-strong
[api-istable]: #istablenode-unknown-value-is-table
[api-istablecell]: #istablecellnode-unknown-value-is-tablecell
[api-istablerow]: #istablerownode-unknown-value-is-tablerow
[api-istext]: #istextnode-unknown-value-is-text
[api-isthematicbreak]: #isthematicbreaknode-unknown-value-is-thematicbreak
[api-isyaml]: #isyamlnode-unknown-value-is-yaml
