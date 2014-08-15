# meteor-pickadate.js

A Meteor.js wrapper for [Pickadate.js](http://amsul.ca/pickadate.js/)

> "The mobile-friendly, responsive, and lightweight jQuery date & time input picker."

## Usage

### JavaScript

Call the `pickadate()` function normally from a template's `rendered` callback.

```
Template.myTemplate.rendered = function() {
  $('input[type=date]').pickadate();
};
```
Read the [Pickadate.js docs](http://amsul.ca/pickadate.js/) for a full listing of options.

### Less

Rather than using static CSS files it's better to instead use the Less source files.
For details read: [Meteor.js and Twitter Bootstrap - The right way](http://www.manuel-schoebel.com/blog/meteorjs-and-twitter-bootstrap---the-right-way).
But the general idea is that you want to import the Pickadate.js Less files into your app and use your own custom _variables.import.less file to make any necessary customizations.

```
// Import the base less files
@import "../../packages/pickadate.js/less/base.import.less";
@import "../../packages/pickadate.js/less/base.date.import.less";
@import "../../packages/pickadate.js/less/base.time.import.less";

// Choose a theme
@import "../../packages/pickadate.js/less/default.import.less";
@import "../../packages/pickadate.js/less/default.date.import.less";
@import "../../packages/pickadate.js/less/default.time.import.less";
// or:
@import "../../packages/pickadate.js/less/classic.import.less";
@import "../../packages/pickadate.js/less/classic.date.import.less";
@import "../../packages/pickadate.js/less/classic.time.import.less";

// Customize your colors, etc here:
@import "./pickadate-variables.import.less";

```
