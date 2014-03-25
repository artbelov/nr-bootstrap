# Non-responsive Bootstrap [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Bootstrap front-end framework without responsiveness, which can be used with fixed or fluid width layout.

### Differences from the responsive Bootstrap
* Layout may have a fixed or fluid width.
* Removed all responsive media queries.
* Removed some responsive grid mixins.
* Removed collapsing points.
* Removed some [variables](#changes-in-less-variables).

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
* ```@icon-font-path: "../fonts/";```
* ```@icon-font-name: "glyphicons-halflings-regular";```

### Override container width with CSS
1. Open ```bootstrap.css``` file.
2. Change the width on the ```.container```.

### Override container width with LESS
1. Open ```bootstrap.less``` file.
2. Change ```@container-width``` variable.
3. Compile ```bootstrap.less``` file.

### Changes in LESS Variables
**Added:**

1. ```@container-width```

**Removed:**

1. ```@screen-*```
2. ```@grid-float-*```
3. ```@container-sm```
4. ```@container-md```
5. ```@container-lg```

### Author

**Artem Belov**

* <http://www.artbelov.com/>
* <https://twitter.com/belov>
