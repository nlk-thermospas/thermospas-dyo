/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  fingerprint: {
    exclude: ['assets/images']
  }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('vendor/css/normalize.css');
app.import('vendor/css/foundation.css');
app.import('vendor/js/modernizr.js');
app.import('vendor/js/jquery-migrate-1.2.1.min.js');
app.import('vendor/js/fastclick.js');
app.import('vendor/js/jquery.cookie.js');
app.import('vendor/js/placeholder.js');
app.import('vendor/js/foundation.js');
app.import('vendor/js/foundation.abide.js');
app.import('vendor/js/foundation.tooltip.js');
app.import('vendor/js/foundation.reveal.js');
app.import('vendor/js/fabric.min.js');

app.import('bower_components/jquery-ui/ui/jquery.ui.widget.js');
app.import('bower_components/cloudinary_js/js/load-image.min.js');
app.import('bower_components/cloudinary_js/js/canvas-to-blob.min.js');
app.import('bower_components/jquery-file-upload/js/jquery.iframe-transport.js');
app.import('bower_components/jquery-file-upload/js/jquery.fileupload.js');
app.import('bower_components/cloudinary_js/js/jquery.cloudinary.js');
app.import('bower_components/jquery-file-upload/js/jquery.fileupload-process.js');
app.import('bower_components/jquery-file-upload/js/jquery.fileupload-image.js');
app.import('bower_components/jquery-file-upload/js/jquery.fileupload-validate.js');

app.import('bower_components/jquery-file-upload/css/jquery.fileupload.css');

app.import('vendor/js/jquery.maskedinput-1.3.min.js');

module.exports = app.toTree();
