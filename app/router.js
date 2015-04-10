import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('hotTubs', function() {
    this.route('create');

    this.resource('hotTub', { path: '/:hotTub_id' }, function() {
      this.route('selectModel');
      this.route('selectJets');
      this.route('selectColors');
      this.route('selectOptions');
      this.route('setUserDetails');
      this.route('personalize');
    });
  });
});

export default Router;
