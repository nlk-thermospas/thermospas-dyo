import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

/**
 * Helper method to insert category group dividers on selectOptions step
 * @param  string group
 * @return string HTML
 */
Ember.Handlebars.registerHelper('ifCond', function(group) {
  if(typeof window.optionGroup !== 'undefined'){
    if(window.optionGroup !== group) {
      window.optionGroup = group;
      return '<div class="optionDivider"></div>';
    }
  }
  window.optionGroup = group;
});