# [Non-responsive Bootstrap](http://www.artbelov.com/nr-bootstrap/)

[![Bower version](https://badge.fury.io/bo/nr-bootstrap.svg)](http://badge.fury.io/bo/nr-bootstrap)
[![Build Status](https://secure.travis-ci.org/artbelov/nr-bootstrap.svg?branch=master)](http://travis-ci.org/artbelov/nr-bootstrap)
[![devDependency Status](https://david-dm.org/artbelov/nr-bootstrap/dev-status.svg)](https://david-dm.org/artbelov/nr-bootstrap#info=devDependencies)

[Bootstrap](https://github.com/twbs/bootstrap) front-end framework without responsiveness, which can be used with fixed or fluid layout.

## Quick start options

- Clone the repo: `git clone https://github.com/artbelov/nr-bootstrap.git`.
- Download the latest [build](https://github.com/artbelov/nr-bootstrap/archive/master.zip) or [release](https://github.com/artbelov/nr-bootstrap/releases/download/v3.2.0/nr-bootstrap-v3.2.0-css.zip).
- Install with [Bower](http://bower.io/): `bower install nr-bootstrap`.

## Usage
1. Add or replace [CSS](https://github.com/artbelov/nr-bootstrap/tree/master/css)/[LESS](https://github.com/artbelov/nr-bootstrap/tree/master/less) files in your project.
2. Use only `col-*` grid classes.
3. Don't use navbar collapsing.

## Override container width

**In CSS:**

1. Open `bootstrap.css` file.
2. Change `width` of the `.container`.

**In LESS:**

1. Open `variables.less` file.
2. Change `@container-default` value.
3. Compile `bootstrap.less` file.

**In own styles:**

1. Create your own `.css`, `.less` or `<style>` tag, which is used after `bootstrap.css`.
2. Create `.container` and set `width` property, e.g. `.container { width: 1140px !important; }`.

## Thanks

[Mark Otto](http://github.com/markdotto) and [Jacob Thornton](http://github.com/fat) for [Bootstrap](https://github.com/twbs/bootstrap).

## Author

**Artem Belov**

- <http://www.artbelov.com>
- <https://twitter.com/belov>

## License

Code released under [the MIT license](http://opensource.org/licenses/MIT).
