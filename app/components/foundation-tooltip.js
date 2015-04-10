import Ember from 'ember';

var FoundationTooltip = Ember.Component.extend({
  initTooltip: function() {
    Ember.$(document).foundation('tooltip', {});
  }.on('didInsertElement')
});

export default FoundationTooltip;
