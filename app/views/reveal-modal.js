import Ember from 'ember';

var RevealModal = Ember.View.extend({
  initAbide: function() {
    // could this specifically be for reveal?
    // also might want to configure options here
    Ember.$(document).foundation();
  }.on('didInsertElement')
});

export default RevealModal;
