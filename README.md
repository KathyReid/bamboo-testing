# eSolutions Base UI Framework
The Base UI Framework includes all the core global assets that are shared between all Deakin eSolutions' digital projects. This includes elements such as colours, fonts and icons.

Version: 1.0.0

## Table of contents

- [What's Included](#whats-included)
- [Project Structure](#project-structre)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [Making Modifications](#making-modifications)
- [Copyright and License](#copyright-and-license)
- [Creators](#creators)

## What's Included
* Deakin's colour palette
* The Font Awesome icon library (v4.4.0)
* Open Sans font
* Deakin Worldly font
* Deakin Logo

## Installation
* [Bower](http://bower.io/): `$bower install des-base-framework`
* [npm](https://www.npmjs.com/): `$npm install des-base-framework`
* Clone the latest release from Stash

Note that it is not recommended that you clone the master branch from Stash as this is the global working copy. Instead get the Base UI Framework by getting a 'release' version from one of the methods listed above.

## Project Structure
The project has the following structure. You will find everything you need in the ```dist/``` folder unless you plan on doing development to the Base UI Framework itself (see the 'Making Modifications' section).

```
des-base-framework/
├── img/
├── dist/
│   ├── fonts/
│   ├── img/
│   ├── less/
│   └── scss/
├── fonts/
└── less/
```

## How to Use

### Importing into your projects
Place the following import statements into your code so that the Base UI Framework will get compiled along with the rest of your project. Note that you will need to modify the path to reflect where you install Base UI Framework library:

#### Less
```less
@import "path-to-base-framework .../des-base-framework/dist/less/des-base-fonts.less";
@import "path-to-base-framework .../des-base-framework/dist/less/des-base-variables.less";
```

#### Sass
```scss
@import "path-to-base-framework .../des-base-framework/dist/scss/des-base-variables.scss";
@import "path-to-base-framework .../des-base-framework/dist/scss/des-base-fonts.scss";
```

*Note that the order of the ```@import``` statements is different for each pre-processor.

### Modifying the font references
Font path references refer to where the fonts are located in relation to the **css file** that is referencing them (not the Less/Sass files that contain the import statement). You may need to modify these variables depending on where you package your fonts and stylesheets.

By default this path is located one folder up from the stylesheet in a folder called ```/fonts```.

#### Less
```less
// Font Awesome font path
@fa-font-path: "../fonts/font-awesome";

// Open Sans font path
@OpenSansPath: "../fonts/open-sans";

// Worldly font path
@worldly-path: "../fonts/worldly";
```

#### Sass
```scss
// Font Awesome font path
$fa-font-path: "../fonts/font-awesome" !default;

// Open Sans font path
$OpenSansPath: "../fonts/open-sans" !default;

// Worldly font path
$worldly-path: "../fonts/worldly" !default;
```

## Making Modifications

### Development Files
Modifications can be made to the Base UI Framework by modifying, adding or deleting files from the following folders.

```
├── fonts/
├── img/
├── less/
```
### Less Development Files
The core brand files are maintained in Less format. These files are then converted into Sass using Grunt, allowing the Base UI Framework to support both pre-processors but only requiring one set of files to be maintained.

#### Less Development Hierarchy
The 'less/' folder consists of the following structure:
```
less/
├── des-base-fonts.less
├── des-base-variables
└── variables/
    ├── des-brand-base.less
    ├── des-colours-base.less
    └── des-fonts-base.less
```

The ```.less``` files at the top of the hierarchy are consolidation files that ```@import``` other component files from the second level folders. Make sure that any new files that you add to the project are imported into a corresponding consolidation file.

### Grunt
Any modified files will need to be compiled by running the following Grunt command:
```bash
$grunt
```

This script will compile and package all development files and place them in the ```/dist``` folder.

## Copyright and License
All code and documentation is copyright [Deakin University](http://deakin.edu.au) and released under the [MIT license](https://opensource.org/licenses/MIT) with the exception of:

* Font Awesome: Copyright [Dave Grundy](http://fontawesome.io/license/)
* Open Sans: Copyright [Steve Matteson](http://www.monotype.com/studio/steve-matteson)

## Creators
Created and maintained by the Digital Engagement Solutions and Platforms team, Deakin eSolutions.
