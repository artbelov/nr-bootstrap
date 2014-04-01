# [Non-responsive Bootstrap](http://www.artbelov.com/non-responsive-bootstrap/) [![devDependency Status](https://david-dm.org/artbelov/non-responsive-bootstrap/dev-status.png?theme=shields.io)](https://david-dm.org/artbelov/non-responsive-bootstrap#info=devDependencies)

[Bootstrap](http://getbootstrap.com/) front-end framework without responsiveness, which can be used with fixed or fluid layout.

### Quick Start
1. Clone the repository or download it in ZIP file
2. Add or replace CSS files in your project
3. [Override width](#override-width-of-container) of ```.container```  in ```variables.less``` or ```bootstrap.css```
4. Use only ```col-xs-*``` grid classes

### Common recommendations
* Remove all navbar collapsing and expanding behavior
* Remove the viewport ```<meta>``` tag from ```<head>``` section

### Default container width
```@container-width: ((970px + @grid-gutter-width))```

### Override width of container

**CSS**

1. Open ```bootstrap.css``` file
2. Find and change the ```width``` of the ```.container```

**LESS**

1. Open ```bootstrap.less``` file
2. Find and change ```@container-width``` variable
3. Compile ```bootstrap.less``` file

### Author

**Artem Belov**

- <https://twitter.com/belov>
- <http://github.com/artbelov>
- <http://www.artbelov.com>

### Thanks

[Mark Otto](http://github.com/markdotto) and [Jacob Thornton](http://github.com/fat) for [Bootstrap](https://github.com/twitter/bootstrap).

### License

Code released under [the MIT license](http://opensource.org/licenses/MIT).
