# eslint-plugin-wpcalypso

Custom ESLint rules for the [WordPress.com Calypso project](https://github.com/automattic/wp-calypso).

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-wpcalypso`:

```
$ npm install eslint-plugin-wpcalypso --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-wpcalypso` globally.

## Usage

Add `wpcalypso` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "wpcalypso"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "wpcalypso/rule-name": 2
    }
}
```

## Supported Rules

- [`i18n-ellipsis`](docs/rules/i18n-ellipsis.md): Disallow using three dots in translate strings
- [`i18n-mismatched-placeholders`](docs/rules/i18n-mismatched-placeholders.md): Ensure placeholder counts match between singular and plural strings
- [`i18n-named-placeholders`](docs/rules/i18n-named-placeholders.md): Disallow multiple unnamed placeholders
- [`i18n-no-collapsible-whitespace`](docs/rules/i18n-no-collapsible-whitespace.md): Disallow collapsible whitespace in translatable strings
- [`i18n-no-placeholders-only`](docs/rules/i18n-no-placeholders-only.md): Disallow strings which include only placeholders
- [`i18n-no-this-translate`](docs/rules/i18n-no-this-translate.md): Disallow this.translate()
- [`i18n-no-variables`](docs/rules/i18n-no-variables.md): Disallow variables as translate strings
- [`jsx-classname-namespace`](docs/rules/jsx-classname-namespace.md): Ensure JSX className adheres to CSS namespace guidelines
- [`jsx-gridicon-size`](docs/rules/jsx-gridicon-size.md): Enforce recommended Gridicon size attributes
- [`import-docblock`](docs/rules/import-docblock.md): Enforce external, internal dependencies docblocks
- [`post-message-no-wildcard-targets`](docs/rules/post-message-no-wildcard-targets.md): Disallow using the wildcard '*' in `postMessage`
- [`jsx-no-unbound-members-in-props`](docs/rules/jsx-no-unbound-members-in-props.md): Disallow unbound members of `this` in JSX Props

## License

Calypso is licensed under [GNU General Public License v2 (or later)](https://github.com/Automattic/eslint-plugin-wpcalypso/blob/master/LICENSE.md).
