# Non-responsive Bootstrap

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

##### Bootstrap front-end framework without responsiveness, which can be used with fixed or fluid width layout.

##### Based on Bootstrap 3.1.1

### Differences from the responsive Bootstrap
* Container may have a fixed or fluid width.
* Removed all responsive media queries.
* Removed responsive grid mixins.
* Removed collapsing points.

### Quick Start
1. Clone ```git clone git@github.com:artbelov/Non-responsive-Bootstrap.git``` or download repository files.
2. Get necessary ```bootstrap.css``` or ```less/bootstrap.less``` file.
3. Override ```.container``` width in ```variables.less``` or ```bootstrap.css``` file.
4. Insert compiled CSS file in your Project with ```<style>``` tag.
5. Use only ```col-xs-*``` grid classes and avoid removed variables.

### Common recommendations
* If using navbars, remove all navbar collapsing and expanding behavior.
* Omit the viewport ```<meta>``` if it mentioned in ```<head>``` section.

### Override container width with CSS
1. Get necessary ```bootstrap.css``` file.
2. Change the width on the ```.container```, for example ```width: 970px !important;```.

### Override container width with LESS
1. Change ```@container-width``` in ```less/variables.less```.
2. Compile ```less/bootstrap.less``` file.

### Changes in LESS Variables
**Added:**

1. ```@container-width```

**Removed:**

1. ```@screen-*```
2. ```@grid-float-*```
3. ```@container-sm```
4. ```@container-md```
5. ```@container-lg```
