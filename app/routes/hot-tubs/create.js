import Ember from 'ember';

var irefval1 = 'iDYO';

var HotTubsCreateRoute = Ember.Route.extend({
beforeModel: function(transition) {
	if(transition.queryParams.iref)
    {	
    	irefval1 = transition.queryParams.iref;
    }
    //console.log(location.href + ' iref create1 => ' + irefval1);
  },
  model: function() {
    var hotTub = this.store.createRecord('hotTub');
    hotTub.set('irefval', irefval1);
    hotTub.set('createdAt', new Date());
    hotTub.save();
    this.replaceWith('hotTub.selectModel', hotTub);
  }
});

export default HotTubsCreateRoute;
