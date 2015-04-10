import Ember from 'ember';

var Abide = Ember.View.extend({
  initAbide: function() {
    Ember.$(document).foundation('abide', {});
    Ember.run.scheduleOnce('afterRender', this, function(){
    	this.$('.phone-field input').mask("(999) 999-9999");
    });
  }.on('didInsertElement')
});

export default Abide;
