# [Non-responsive Bootstrap](http://www.artbelov.com/non-responsive-bootstrap/)

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) [![Build Status](http://img.shields.io/travis/artbelov/non-responsive-bootstrap/master.svg)](https://travis-ci.org/artbelov/non-responsive-bootstrap) [![devDependency Status](https://david-dm.org/artbelov/non-responsive-bootstrap/dev-status.png?theme=shields.io)](https://david-dm.org/artbelov/non-responsive-bootstrap#info=devDependencies)

**[Bootstrap](https://github.com/twitter/bootstrap) front-end framework without responsiveness, which can be used with fixed or fluid layout.**

### Quick Start

1. Clone the repository or download it in ZIP file.
2. Add or replace CSS/LESS files in your project.
3. [Override width](#override-width-of-container-class) of `.container`  in `variables.less` or `bootstrap.css`.
4. Use only `col-*` grid classes.

### Common recommendations

* Remove all navbar collapsing and expanding behavior.
* Remove the viewport `<meta>` tag from `<head>` section.

### Default container width

[@container-width](https://github.com/artbelov/non-responsive-bootstrap/blob/master/less/variables.less#L11) = 970px + @grid-gutter-width.

### Override width of container class

**In `bootstrap.css`:**

1. Open `bootstrap.css` file.
2. Find and change `width` of the `.container`.

**In `variables.less`:**

1. Open `variables.less` file.
2. Find and change `@container-width` variable.
3. Compile `bootstrap.less` file.

**In own styles:**

1. Create your own `.css` file or `<style>` tag, which is placed after `bootstrap.css`.
2. Override `.container` width, for example, `.container { width: 1140px !important; }`.

### Available Grunt commands

#### Build – `grunt`

Task for run tests locally and compile the CSS.

#### Watch – `grunt watch`

Task for watching LESS files and automatically building them on save.

#### Update – `grunt update`

Task for updating packages of the node package manager.

### Thanks

[Mark Otto](http://github.com/markdotto) and [Jacob Thornton](http://github.com/fat) for [Bootstrap](https://github.com/twitter/bootstrap).

### Author

**Artem Belov**

- <http://www.artbelov.com>
- <https://twitter.com/belov>
- <http://github.com/artbelov>

### License

Code released under [the MIT license](http://opensource.org/licenses/MIT).
