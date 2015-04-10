import Ember from 'ember';

var TopNav = Ember.View.extend({
  didInsertElement: function() {
    var step = Ember.$('.step').text().toLowerCase();
    var currentStep = Ember.$('.' + step)[0];
    var navItems = Ember.$('.sub-nav').children();
    var stepIndex = Ember.$(currentStep).index();

    var index = 0;
    while (index < stepIndex) {
      Ember.$(navItems[index]).removeClass('disabled-nav-item');
      index++;
    }

    // If there is a next nav item, and the current index is not 4 or 0,
    // remove the disabled class
    if (Ember.$(navItems[index+1]) && index !== 4 && index !== 0) {
      Ember.$(navItems[index+1]).removeClass('disabled-nav-item');
    }

    if (stepIndex === 5) {
      Ember.$(navItems).addClass('disabled-nav-item');
    }
  }
});

export default TopNav;
