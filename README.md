# eSolutions Base UI Framework
The Base UI Framework includes all the core global assets that are shared between all Deakin eSolutions' digital projects. This includes elements such as colours, fonts and icons.

## Current Version
v1.0.0

## How it works
The Base UI Framework works by using a core group of Less files (located in the '/less') that are compiled and packaged for distribution using Grunt. These same files are also converted into sass format, allowing the Base UI Framework support both the Less and Sass pre-processors, but only requiring one format (Less) to be maintained for development.

## What's Included
The following are available in both Sass and Less formats

* Deakin's colour palette
* The Font Awesome icon library (v4.4.0)
* Open Sans font
* Deakin Worldly font

## Installation
* [Bower](http://bower.io/): `$ bower install esolutions-base-framework`
* [npm](https://www.npmjs.com/): `$ npm install esolutions-base-framework`
* Clone the latest release from Stash

Note that it is not recommended that you clone the master branch from Stash as this is the global working copy. Instead get the Base UI Framework by getting a 'release' version from one of the methods listed above.

## How to Use

### Importing into your projects
Place the following import statement into your code so that it will get compiled along with the rest of your project. You will need to modify the path to reflect where you install the ui-framework-base library:

#### Less
`@import "path-to-base-framework .../esolutions-base-framework/dist/less/des-base-framework.less";`

#### Sass
`@import "path-to-base-framework .../esolutions-base-framework/dist/scss/des-base-framework.scss";`

### Modifying the font references
Font path references refer to where the fonts are located in relation to the **css file** that is referencing them (not the less/sass files). You may need to modify these variables depending on where you package your fonts and stylesheets.

By default this path is located one folder up from the stylesheet in a folder called 'fonts'.

#### Less
```css
// Font Awesome font path
@fa-font-path: "../fonts/font-awesome";

// Open Sans font path
@OpenSansPath: "../fonts/open-sans";

// Worldly font path
@worldly-path: "../fonts/worldly";
```

#### Sass
```css
// Font Awesome font path
$fa-font-path: "../fonts/font-awesome" !default;

// Open Sans font path
$OpenSansPath: "../fonts/open-sans" !default;

// Worldly font path
$worldly-path: "../fonts/worldly" !default;
```

## Copyright and License
All code and documentation is copyright [Deakin University](http://deakin.edu.au) and released under the [MIT license](https://opensource.org/licenses/MIT) with the exception of:

* Font Awesome: Copyright [Dave Grundy](http://fontawesome.io/license/)
* Open Sans: Copyright [Steve Matteson](http://www.monotype.com/studio/steve-matteson)

