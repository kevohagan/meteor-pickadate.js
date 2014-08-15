Package.describe({
  summary: "A Meteor.js wrapper for Pickadate.js (http://amsul.ca/pickadate.js/) The mobile-friendly, responsive, and lightweight jQuery date & time input picker."
});

Package.on_use(function (api, where) {
  api.use('jquery', 'client');
  api.add_files([
    'js/picker.js',
    'js/picker.date.js',
    'js/picker.time.js',
    'js/legacy.js'
  ], 'client');
});
