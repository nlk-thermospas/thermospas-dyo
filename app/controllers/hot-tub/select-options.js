import Ember from 'ember';

var HotTubSelectOptionsController = Ember.ObjectController.extend({
  isTotalControlTherapy: function(key, value) {
    var hotTub = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return hotTub.get('totalControlTherapy');
    } else {
      // property being used as a setter
      hotTub.set('totalControlTherapy', value);
      hotTub.save();
      return value;
    }
  }.property('model.totalControlTherapy'),
  isIceBucket: function(key, value) {
    var hotTub = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return hotTub.get('iceBucket');
    } else {
      // property being used as a setter
      hotTub.set('iceBucket', value);
      hotTub.save();
      return value;
    }
  }.property('model.iceBucket'),
  isPillowJet: function(key, value) {
    var hotTub = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return hotTub.get('pillowJet');
    } else {
      // property being used as a setter
      hotTub.set('pillowJet', value);
      hotTub.save();
      return value;
    }
  }.property('model.pillowJet'),
  isCrystalBall: function(key, value) {
    var hotTub = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return hotTub.get('crystalBall');
    } else {
      // property being used as a setter
      hotTub.set('crystalBall', value);
      hotTub.save();
      return value;
    }
  }.property('model.crystalBall'),
  isCupHolder: function(key, value) {
    var hotTub = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return hotTub.get('cupHolder');
    } else {
      // property being used as a setter
      hotTub.set('cupHolder', value);
      hotTub.save();
      return value;
    }
  }.property('model.cupHolder'),
  isStainlessSteelJets: function(key, value) {
    var hotTub = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return hotTub.get('stainlessSteelJets');
    } else {
      // property being used as a setter
      hotTub.set('stainlessSteelJets', value);
      hotTub.save();
      return value;
    }
  }.property('model.stainlessSteelJets'),
  isLighting: function(key, value) {
    var hotTub = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return hotTub.get('lighting');
    } else {
      // property being used as a setter
      hotTub.set('lighting', value);
      hotTub.save();
      return value;
    }
  }.property('model.lighting'),
  isStereo: function(key, value) {
    var hotTub = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return hotTub.get('stereo');
    } else {
      // property being used as a setter
      hotTub.set('stereo', value);
      hotTub.save();
      return value;
    }
  }.property('model.stereo'),
  isOzonator: function(key, value) {
    var hotTub = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return hotTub.get('ozonator');
    } else {
      // property being used as a setter
      hotTub.set('ozonator', value);
      hotTub.save();
      return value;
    }
  }.property('model.ozonator'),
  isSteps: function(key, value) {
    var hotTub = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return hotTub.get('steps');
    } else {
      // property being used as a setter
      hotTub.set('steps', value);
      hotTub.save();
      return value;
    }
  }.property('model.steps'),
  isCoverLifter: function(key, value) {
    var hotTub = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return hotTub.get('coverLifter');
    } else {
      // property being used as a setter
      hotTub.set('coverLifter', value);
      hotTub.save();
      return value;
    }
  }.property('model.steps'),
  isLightedGrabBars: function(key, value) {
    var hotTub = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return hotTub.get('lightedGrabBars');
    } else {
      // property being used as a setter
      hotTub.set('lightedGrabBars', value);
      hotTub.save();
      return value;
    }
  }.property('model.steps'),
  actions: {
    previousStep: function() {
      var hotTub = this.get('model');
      hotTub.set('totalControlTherapy', false);
      hotTub.set('iceBucket', false);
      hotTub.set('pillowJet', false);
      hotTub.set('crystalBall', false);
      hotTub.set('cupHolder', false);
      hotTub.set('lighting', false);
      hotTub.set('stereo', false);
      hotTub.set('ozonator', false);
      hotTub.set('steps', false);
      hotTub.set('coverLifter', false);
      hotTub.set('stainlessSteelJets', false);
      this.transitionToRoute('hotTub.selectColors', hotTub);
    },
    nextStep: function() {
      var hotTub = this.get('model');
      this.transitionToRoute('hotTub.setUserDetails', hotTub);
    }
  }
});

export default HotTubSelectOptionsController;
