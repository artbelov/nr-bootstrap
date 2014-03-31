# [Non-responsive Bootstrap](http://artbelov.github.io/non-responsive-bootstrap/)

[![Build Status](http://img.shields.io/travis/artbelov/non-responsive-bootstrap/master.svg)](https://travis-ci.org/artbelov/non-responsive-bootstrap) [![devDependency Status](https://david-dm.org/artbelov/non-responsive-bootstrap/dev-status.png?theme=shields.io)](https://david-dm.org/artbelov/non-responsive-bootstrap#info=devDependencies)

[Bootstrap](https://github.com/twbs/bootstrap) front-end framework without responsiveness, which can be used with fixed or fluid layout.

### Quick Start
1. Clone the repository or download it in ZIP file
2. Add or replace CSS/LESS files in your project
3. [Override](#override-container-width-with-css) ```.container``` width in ```variables.less``` or ```bootstrap.css```
4. Use only ```col-xs-*``` grid classes and avoid [removed variables](#removed-less-variables)

### Common recommendations
* Remove all navbar collapsing and expanding behavior
* Remove the viewport ```<meta>``` tag from ```<head>``` section
* Do not use LESS variables: ```@screen-*``` ```@grid-float-*```  ```@container-*```

### Default container width
* ```@container-width: ((970px + @grid-gutter-width));```

### Override container width in CSS
1. Open ```bootstrap.css``` file
2. Find and change the ```width``` of the ```.container``` class

### Override container width in LESS
1. Open ```bootstrap.less``` file
2. Find and change ```@container-width``` variable
3. Compile ```bootstrap.less``` file

### Bootstrap Authors

**Mark Otto**

- <http://twitter.com/mdo>
- <http://github.com/mdo>

**Jacob Thornton**

- <http://twitter.com/fat>
- <http://github.com/fat>

### Non-responsive Bootstrap Author

**Artem Belov**

- <https://twitter.com/belov>
- <http://github.com/artbelov>
- <http://www.artbelov.com>

### License

Code released under [the MIT license](LICENSE).