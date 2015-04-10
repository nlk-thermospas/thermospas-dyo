import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.replaceWith('hotTubs.create');
  }
});

export default IndexRoute;
