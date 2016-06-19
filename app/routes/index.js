import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    if( typeof transition.queryParams.display != 'undefined') {
      localStorage.setItem("display", transition.queryParams.display);
    } else {
      localStorage.removeItem("display");
    }
    //console.log(location.href + ' iref=> ' + transition.queryParams.iref);
    //this.replaceWith('hotTubs.create');
    this.transitionTo('hotTubs.create', {queryParams: {iref: transition.queryParams.iref}});
  }
});

export default IndexRoute;
