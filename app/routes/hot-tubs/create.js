import Ember from 'ember';

var HotTubsCreateRoute = Ember.Route.extend({
  model: function() {
    var hotTub = this.store.createRecord('hotTub');
    hotTub.set('createdAt', new Date());
    hotTub.save();
    this.transitionTo('hotTub.selectModel', hotTub);
  }
});

export default HotTubsCreateRoute;
