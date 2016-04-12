/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'thermospas-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'connect-src': "'self' www.thermospas.com thermospas.com 67.21.112.126 dyo.thermospas.com 67.21.112.128 67.21.112.128:35729 *.firebaseio.com",
      'font-src': "'self' fonts.googleapis.com fonts.gstatic.com",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' 67.21.112.128:35729 google-analytics.com www.google-analytics.com",
      'img-src': "'self' google-analytics.com www.google-analytics.com csscheckbox.com www.csscheckbox.com",
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.CLOUDINARY_NAME = '';
    ENV.CLOUDINARY_UPLOAD_PRESET = '';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.CLOUDINARY_NAME = '';
    ENV.CLOUDINARY_UPLOAD_PRESET = '';
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
  }

  return ENV;
};
