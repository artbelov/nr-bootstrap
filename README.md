# [Non-responsive Bootstrap](http://www.artbelov.com/nr-bootstrap/)

[![Bower version](https://badge.fury.io/bo/nr-bootstrap.svg)](http://badge.fury.io/bo/nr-bootstrap)
[![Build Status](https://secure.travis-ci.org/artbelov/nr-bootstrap.svg?branch=master)](http://travis-ci.org/artbelov/nr-bootstrap)
[![devDependency Status](https://david-dm.org/artbelov/nr-bootstrap/dev-status.svg)](https://david-dm.org/artbelov/nr-bootstrap#info=devDependencies)

**[Bootstrap](https://github.com/twbs/bootstrap) front-end framework without responsiveness, which can be used with fixed or fluid layout.**

### Quick start

Three quick start options are available:

- [Download the latest release](https://github.com/artbelov/nr-bootstrap/releases/download/v3.2.0/nr-bootstrap-v3.2.0-css.zip).
- Clone the repo: `git clone https://github.com/artbelov/nr-bootstrap.git`.
- Install with [Bower](http://bower.io/): `bower install nr-bootstrap`.

### Usage
1. Add or replace [CSS](https://github.com/artbelov/nr-bootstrap/tree/master/css)/[LESS](https://github.com/artbelov/nr-bootstrap/tree/master/less) files in your project.
2. [Override width](#override-width-of-container) of `.container`  in `variables.less` or `bootstrap.css`.
3. Use only `col-*` grid classes.

### Recommendations

* Remove all navbar collapsing and expanding behavior.
* Remove the viewport `<meta>` tag from `<head>` section.

### Default values ​​of extra LESS variables

Container width: `1000px`

Glyphicons path: `../fonts/`

### Override width of container

**In `bootstrap.css`:**

1. Open `bootstrap.css` file.
2. Find and change `width` of the `.container`.

**In `variables.less`:**

1. Open `variables.less` file.
2. Find and change `@container-default` variable.
3. Compile `bootstrap.less` file.

**In own styles:**

1. Create your own `.css` file or `<style>` tag, which is placed after `bootstrap.css`.
2. Override `.container` width, for example, `.container { width: 1140px !important; }`.

### Thanks

[Mark Otto](http://github.com/markdotto) and [Jacob Thornton](http://github.com/fat) for [Bootstrap](https://github.com/twbs/bootstrap).

### Author

**Artem Belov**

- <http://www.artbelov.com>
- <https://twitter.com/belov>
- <http://github.com/artbelov>

### License

Code released under [the MIT license](http://opensource.org/licenses/MIT).
