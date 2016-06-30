import Ember from 'ember';

var HotTubsController = Ember.ArrayController.extend({
  sortProperties: ['createdAt'],
  sortAscending: false,
});

export default HotTubsController;
