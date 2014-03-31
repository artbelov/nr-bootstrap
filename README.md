# [Non-responsive Bootstrap](http://artbelov.github.io/non-responsive-bootstrap/)

[![GitHub release](http://img.shields.io/github/release/artbelov/non-responsive-bootstrap.svg)](https://github.com/artbelov/non-responsive-bootstrap/releases)[![Build Status](http://img.shields.io/travis/artbelov/non-responsive-bootstrap/master.svg)](https://travis-ci.org/artbelov/non-responsive-bootstrap)[![devDependency Status](https://david-dm.org/artbelov/non-responsive-bootstrap/dev-status.png?theme=shields.io)](https://david-dm.org/artbelov/non-responsive-bootstrap#info=devDependencies)

Bootstrap front-end framework without responsiveness, which can be used with fixed or fluid layout.

### Differences from the Bootstrap
* Layout may have a fixed or fluid width.
* Removed all responsive media queries.
* Removed some responsive grid mixins.
* Removed collapsing points.
* Removed some LESS [variables](#removed-less-variables).

### Quick Start
1. Clone repository or download it in ZIP file.
2. Get necessary ```bootstrap.css``` or ```bootstrap.less``` file.
3. [Override](#override-container-width-with-css) ```.container``` width in ```variables.less``` or ```bootstrap.css``` file.
4. Insert compiled CSS file in your Project with ```<style>``` tag.
5. Use only ```col-xs-*``` grid classes and avoid [removed variables](#changes-in-less-variables).

### Common recommendations
* Remove all navbar collapsing and expanding behavior.
* Remove the viewport ```<meta>``` from ```<head>``` section.

### Dafault values
* ```@container-width: ((970px + @grid-gutter-width));```

### Override container width in CSS
1. Open ```bootstrap.css``` file.
2. Find and change the ```width``` of the ```.container``` class.

### Override container width in LESS
1. Open ```bootstrap.less``` file.
2. Find and change ```@container-width``` variable.
3. Compile ```bootstrap.less``` file.

### Removed LESS Variables

1. ```@screen-*```
2. ```@grid-float-*```
3. ```@container-*```

### Bootstrap Authors

**Mark Otto**

- <http://twitter.com/mdo>
- <http://github.com/mdo>

**Jacob Thornton**

- <http://twitter.com/fat>
- <http://github.com/fat>

### N-R Bootstrap Author

**Artem Belov**

* <https://twitter.com/belov>
- <http://github.com/artbelov>
- <http://www.artbelov.com/>
