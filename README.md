# [Non-responsive Bootstrap](http://www.artbelov.com/nr-bootstrap/)

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) [![Build Status](http://img.shields.io/travis/artbelov/nr-bootstrap/master.svg)](https://travis-ci.org/artbelov/nr-bootstrap) [![devDependency Status](https://david-dm.org/artbelov/nr-bootstrap/dev-status.png?theme=shields.io)](https://david-dm.org/artbelov/nr-bootstrap#info=devDependencies)

**[Bootstrap](https://github.com/twbs/bootstrap) front-end framework without responsiveness, which can be used with fixed or fluid layout.**

### Quick start

1. Clone the repository or download it in ZIP.
2. Add or replace CSS/LESS files in your project.
3. [Override width](#override-width-of-container) of `.container`  in `variables.less` or `bootstrap.css`.
4. Use only `col-*` grid classes.

### Recommendations

* Remove all navbar collapsing and expanding behavior.
* Remove the viewport `<meta>` tag from `<head>` section.

### Default values ​​of extra LESS variables

[Container width](https://github.com/artbelov/nr-bootstrap/blob/master/less/variables.less#L304): ((970px + @grid-gutter-width));

[Glyphicons path](https://github.com/artbelov/nr-bootstrap/blob/master/less/variables.less#L75): "../fonts/";

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

### Available Grunt commands

#### Build – `grunt`

Task for run tests locally and compile the CSS.

#### Watch – `grunt watch`

Task for watching LESS files and automatically building them on save.

#### Update – `grunt update`

Task for updating packages of the node package manager.

### Thanks

[Mark Otto](http://github.com/markdotto) and [Jacob Thornton](http://github.com/fat) for [Bootstrap](https://github.com/twbs/bootstrap).

### Author

**Artem Belov**

- <http://www.artbelov.com>
- <https://twitter.com/belov>
- <http://github.com/artbelov>

### License

Code released under [the MIT license](http://opensource.org/licenses/MIT).
