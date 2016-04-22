# Thermospas&reg; DYO Front-end Application

Thermospas&reg; DYO (Design Your Own) is an Ember.js application that allows users to
configure a hot tub and request a quote. It utilizes the following technologies:

- [ember-cli](http://www.ember-cli.com/) for Ember.js project structure and
  local development
- [Foundation](http://foundation.zurb.com/) for front-end styles and minor JS
  features like tooltips and form validation
- [Firebase](https://www.firebase.com/) for hosting the application

The app lives here:
[https://shining-heat-2332.firebaseapp.com](https://shining-heat-2332.firebaseapp.com)

## Prerequisites

You will need the following things properly installed on your computer before
working on the application.

* [Git](http://git-scm.com/)
* Node - use the version specified in `package.json`
* Bower - `npm install -g bower`

## Installation

From the command line, do the following:

* Clone the repository: `git clone git@github.com:acquirgy/thermospas-dyo.git`
* Change into the new directory: `cd thermospas-dyo`
* Install Node dependencies: `npm install`
* Install Ember CLI globally: `pm install -g ember-cli@0.1.1`
* Install front-end dependencies: `bower install`

## Running / Development

Work on the application locally by doing the following:

* Start a local Ember server: `ember server`
* Open your app in the browser at http://localhost:4200

The application uses live reload, so when the code in `app` is updated, the
browser automatically refreshes.

### Styles

Styles live in `app/styles/app.scss` and are written using the .scss flavor of
[Sass](http://sass-lang.com).

The front-end uses [Zurb Foundation](http://foundation.zurb.com/). Not all JS is
included, so if you need to add a specific Foundation JS file, add it to
`vendor/js` and import in the `Brocfile.js`.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more
details.

### Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build` (development)
* `ember build --environment production` (production)

## Hosting

The app is hosted on [Firebase](https://www.firebase.com).

## Deploying

Deploy the app to Firebase by doing the following:

1. Install the Firebase Tools - `npm install -g firebase-tools`
2. Run the deploy script - `sh scripts/deploy.sh

The deploy script builds the site and deploys it to Firebase. It uses
whatever code is in your working branch.

## Assets

Images for the various hot tub parts live in `public/assets/images/hot-tubs`.
Their location and naming structure is critical for the app to work as expected. The `hot-tubs`
directory consists of the following:

``` text
cabinets - photos of cabinets of various models based on color, first letter must be capital and the rest must be lowercase
defaults - the default images based on models
 |
 - cabinets - always the teak color, must follow the naming convention of {Model}-teak.png
 - jets - always the silver class (or lowest class if that does not exist), must follow the naming convention of {Model}-Silver.png
 - shells - always the blue color, must follow the naming convention of {Model}-blue.png
jets - photos of jet options for each model based on the class of the jet option, first letter of the model must be capital, as well as the jet option class
shell - photos of shells of various models based on color, first letter must be capital and the rest must be lowercase
```

## DYO Support API

The Ember.js app is reliant upon a Ruby API built in Sinatra called
[dyo_support](https://github.com/acquirgy/dyo_support). This app is used for
enabling social sharing by uploading the canvas image to Cloudinary and creating
an HTML page for the Cloudinary image that has og tags.

Follow the README instructions to get the app working locally. The Ember
app expects it to be running at http://localhost:4567, see
`dyoSupportLocation` for the config.

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
