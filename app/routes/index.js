import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    if( typeof transition.queryParams.display != 'undefined') {
      localStorage.setItem("display", transition.queryParams.display);
    } else {
      localStorage.removeItem("display");
    }
    this.replaceWith('hotTubs.create');
  }
});

export default IndexRoute;
