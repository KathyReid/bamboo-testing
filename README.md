# Base UI Framework
The Base UI Framework includes all the core global assets that are shared between all digital projects. This includes elements such as colours, fonts and icons.

## Current Version
v1.0.0

## What's Included
The following are available in both Sass and Less formats

* Deakin's colour palette
* The Font Awesome icon library (v4.4.0)
* Google Open Sans font
* Deakin Worldly font

## Installation

### Distribtion Files
* Clone the latest distribution release from Stash

### Source Code
* [Bower](http://bower.io/): `$ bower install esolutions-base-framework`
* [npm](https://www.npmjs.com/): `$ npm install esolutions-base-framework`
* Clone the latest source code release from Stash

Note that it is not recommended that you clone the master branch from Stash as this is the global working copy. Instead get the Base UI Framework from one of the methods listed above.

## How to Use
### Less
Place the following import statements somewhere where it can get compiled as part of your Less project
`    @import "/dist/less/des-colours-base.less";
    @import "../ui-framework-base/dist/less/des-fonts-base.less";
