import DS from 'ember-data';

// A representation of the various models of hot tubs. Named HtModel to not
// conflict wither Ember's concept of a model.
var HtModel = DS.Model.extend({
  //-- associations
  hotTubs: DS.hasMany('hotTub', { async: true }),
  jetOptions: DS.hasMany('jetOption', { async: true }),
  htOptions: DS.hasMany('htOption', { async: true }),
  shellColors: DS.hasMany('shellColor', { async: true }),
  cabinetColors: DS.hasMany('cabinetColor', { async: true}),

  //-- attributes
  name: DS.attr('string'), // name used internally in the app
  displayName: DS.attr('string'), // the name displayed in templates
  series: DS.attr('string'),
  description: DS.attr('string'),

  // options logic
  supportsTotalControlTherapy: DS.attr('boolean', { default: false }),
  supportsIceBucket: DS.attr('boolean', { default: false }),
  supportsPillowJet: DS.attr('boolean', { default: false }),
  supportsCrystalBall: DS.attr('boolean', { default: false }),
  supportsCupHolder: DS.attr('boolean', { default: false }),
  supportsLighting: DS.attr('boolean', { default: false }),
  supportsStereo: DS.attr('boolean', { default: false }),
  supportsOzonator: DS.attr('boolean', { default: false }),
  supportsSteps: DS.attr('boolean', { default: false }),
  supportsCoverLifter: DS.attr('boolean', { default: false }),
  supportsStainlessSteelJets: DS.attr('boolean', { default: false }),
  supportsLightedGrabBars: DS.attr('boolean', {default: false}),

  // the number of people who can fit in the tub
  // at this time, always assume the maximum for those with a range
  peopleSupported: DS.attr('number'),

  //-- computed properties

  // delete this from the fixture data too
  // defaultImageUrl: DS.attr('string'),

  defaultShellImageUrl: function() {
    var name = this.get('name'),
        defaultShellImagePath = '/assets/images/hot-tubs/defaults/shells/';

    return defaultShellImagePath + name + '-blue.png';
  }.property('name'),

  defaultCabinetImageUrl: function() {
    var name = this.get('name'),
        defaultCabinetImagePath = '/assets/images/hot-tubs/defaults/cabinets/';

    return defaultCabinetImagePath + name + '-teak.png';
  }.property('name'),

  defaultJetImageUrl: function() {
    var name = this.get('name'),
        defaultJetImagePath = '/assets/images/hot-tubs/defaults/jets/';

    return defaultJetImagePath + name + '-default.png';
  }.property('name'),

  defaultJetPeopleImageUrl: function() {
    var name = this.get('name'),
        defaultJetPeopleImagePath = '/assets/images/hot-tubs/defaults/people/';

    return defaultJetPeopleImagePath + name + '-default.png';
  }.property('name')
});

HtModel.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Gemini',
      displayName: 'Gemini',
      series: 'Designer Series',
      description: 'A stunningly elegant and intimate hot tub perfect for relaxation indoors or outdoors',
      peopleSupported: 2,
      jetOptions: [1, 2, 3],
      supportsTotalControlTherapy: true,
      supportsIceBucket: false,
      supportsPillowJet: true,
      supportsCrystalBall: false,
      supportsCupHolder: false,
      supportsLighting: true,
      supportsStereo: false,
      supportsOzonator: true,
      supportsSteps: true,
      supportsCoverLifter: true,
      supportsStainlessSteelJets: true,
      supportsLightedGrabBars: false
    },
    {
      id: 2,
      name: 'Maui',
      displayName: 'Maui',
      series: 'Aquatic Series',
      description: 'A truly comfortable yet compact hot tub with all the features and options of a full-sized spa',
      peopleSupported: 3,
      jetOptions: [4, 5, 6],
      supportsTotalControlTherapy: true,
      supportsIceBucket: false,
      supportsPillowJet: true,
      supportsCrystalBall: false,
      supportsCupHolder: false,
      supportsLighting: true,
      supportsStereo: true,
      supportsOzonator: true,
      supportsSteps: true,
      supportsCoverLifter: true,
      supportsStainlessSteelJets: true,
      supportsLightedGrabBars: false
    },
    {
      id: 3,
      name: 'Atlantis',
      displayName: 'Atlantis',
      series: 'Designer Series',
      description: 'An economical, ergonomically designed mid-sized hot tub with deep, comfortable seating',
      peopleSupported: 4,
      jetOptions: [15, 16],
      supportsTotalControlTherapy: false,
      supportsIceBucket: false,
      supportsPillowJet: false,
      supportsCrystalBall: false,
      supportsCupHolder: false,
      supportsLighting: true,
      supportsStereo: true,
      supportsOzonator: true,
      supportsSteps: true,
      supportsCoverLifter: true,
      supportsStainlessSteelJets: false,
      supportsLightedGrabBars: false
    },
    {
      id: 4,
      name: 'Avalon',
      displayName: 'Avalon',
      series: 'Designer Series',
      description: 'An intimate yet versatile hot tub with a reversible lounge for therapy or casual relaxation',
      peopleSupported: 4,
      jetOptions: [7, 8],
      supportsTotalControlTherapy: false,
      supportsIceBucket: false,
      supportsPillowJet: false,
      supportsCrystalBall: false,
      supportsCupHolder: false,
      supportsLighting: true,
      supportsStereo: false,
      supportsOzonator: true,
      supportsSteps: true,
      supportsCoverLifter: true,
      supportsStainlessSteelJets: false,
      supportsLightedGrabBars: false
    },
    {
      id: 5,
      name: 'Concord',
      displayName: 'Concord',
      series: 'Designer Series',
      description: 'A perfect mid-sized hot tub featuring a love seat and luxurious therapy seats with pillows',
      peopleSupported: 4,
      jetOptions: [9, 10, 11],
      supportsTotalControlTherapy: true,
      supportsIceBucket: true,
      supportsPillowJet: true,
      supportsCrystalBall: false,
      supportsCupHolder: false,
      supportsLighting: true,
      supportsStereo: true,
      supportsOzonator: true,
      supportsSteps: true,
      supportsCoverLifter: true,
      supportsStainlessSteelJets: true,
      supportsLightedGrabBars: true
    },
    {
      id: 6,
      name: 'Islander',
      displayName: 'Islander',
      series: 'Aquatic Series',
      description: 'Features four therapy seats with distinct massaging jet configurations and a large spacious foot well',
      peopleSupported: 4,
      jetOptions: [12, 13, 14],
      supportsTotalControlTherapy: true,
      supportsIceBucket: false,
      supportsPillowJet: true,
      supportsCrystalBall: true,
      supportsCupHolder: true,
      supportsLighting: true,
      supportsStereo: true,
      supportsOzonator: true,
      supportsSteps: true,
      supportsCoverLifter: true,
      supportsStainlessSteelJets: true,
      supportsLightedGrabBars: false
    },
    {
      id: 7,
      name: 'Chesapeake',
      displayName: 'Chesapeake',
      series: 'Designer Series',
      description: 'A spacious and inviting hot tub with wrap around seating is perfect for family fun or entertaining guests',
      peopleSupported: 5,
      jetOptions: [27, 28],
      supportsTotalControlTherapy: false,
      supportsIceBucket: false,
      supportsPillowJet: false,
      supportsCrystalBall: false,
      supportsCupHolder: false,
      supportsLighting: true,
      supportsStereo: true,
      supportsOzonator: true,
      supportsSteps: true,
      supportsCoverLifter: true,
      supportsStainlessSteelJets: false,
      supportsLightedGrabBars: false
    },
    {
      id: 8,
      name: 'Dolphin',
      displayName: 'Dolphin',
      series: 'Aquatic Series',
      description: 'A masterfully designed hot tub with sculpted seating set at varying depths and a double-wide lounge',
      peopleSupported: 5,
      jetOptions: [24, 25, 26],
      supportsTotalControlTherapy: true,
      supportsIceBucket: true,
      supportsPillowJet: true,
      supportsCrystalBall: true,
      supportsCupHolder: true,
      supportsLighting: true,
      supportsStereo: true,
      supportsOzonator: true,
      supportsSteps: true,
      supportsCoverLifter: true,
      supportsStainlessSteelJets: true,
      supportsLightedGrabBars: false
    },
    {
      id: 9,
      name: 'Healing Spa',
      displayName: 'Healing Spa',
      series: 'Designer Series',
      description: 'Designed for ease of use and equipped with our widest array of therapeutic features',
      peopleSupported: 5,
      jetOptions: [18, 19],
      supportsTotalControlTherapy: true,
      supportsIceBucket: true,
      supportsPillowJet: true,
      supportsCrystalBall: false,
      supportsCupHolder: false,
      supportsLighting: true,
      supportsStereo: true,
      supportsOzonator: true,
      supportsSteps: true,
      supportsCoverLifter: true,
      supportsStainlessSteelJets: true,
      supportsLightedGrabBars: true
    },
    {
      id: 10,
      name: 'Park Ave',
      displayName: 'Park Avenue',
      series: 'Designer Series',
      description: 'Our most versatile and popular hot tub with doublewide reversible lounge and contoured therapy seats',
      peopleSupported: 5,
      jetOptions: [20, 21, 22, 23],
      supportsTotalControlTherapy: true,
      supportsIceBucket: true,
      supportsPillowJet: true,
      supportsCrystalBall: false,
      supportsCupHolder: false,
      supportsLighting: true,
      supportsStereo: true,
      supportsOzonator: true,
      supportsSteps: true,
      supportsCoverLifter: true,
      supportsStainlessSteelJets: true,
      supportsLightedGrabBars: true
    },
    {
      id: 11,
      name: 'Manhattan',
      displayName: 'Manhattan',
      series: 'Designer Series',
      description: 'A luxurious hot tub with up to eight different seating areas for those who want the best',
      peopleSupported: 6,
      jetOptions: [35, 36, 37, 38],
      supportsTotalControlTherapy: true,
      supportsIceBucket: true,
      supportsPillowJet: true,
      supportsCrystalBall: false,
      supportsCupHolder: false,
      supportsLighting: true,
      supportsStereo: false,
      supportsOzonator: true,
      supportsSteps: true,
      supportsCoverLifter: true,
      supportsStainlessSteelJets: true,
      supportsLightedGrabBars: true
    },
    {
      id: 12,
      name: 'Acquacisor',
      displayName: 'Aquacisor',
      series: 'Fitness Series',
      description: 'A perfect blend of low-impact exercise, deep massage, and entertainment features',
      peopleSupported: 7,
      jetOptions: [33, 34],
      shellColors: [1],
      supportsTotalControlTherapy: true,
      supportsIceBucket: false,
      supportsPillowJet: true,
      supportsCrystalBall: false,
      supportsCupHolder: false,
      supportsLighting: true,
      supportsStereo: false,
      supportsOzonator: true,
      supportsSteps: true,
      supportsCoverLifter: true,
      supportsStainlessSteelJets: true,
      supportsLightedGrabBars: true
    },
    {
      id: 13,
      name: 'Olympian',
      displayName: 'Olympian',
      series: 'Fitness Series',
      description: 'A highly flexible hot tub for low-impact exercise or deep therapy with an adjustable spa seat',
      peopleSupported: 6,
      jetOptions: [29, 30, 31, 32],
      supportsTotalControlTherapy: true,
      supportsIceBucket: true,
      supportsPillowJet: true,
      supportsCrystalBall: false,
      supportsCupHolder: false,
      supportsLighting: true,
      supportsStereo: true,
      supportsOzonator: true,
      supportsSteps: true,
      supportsCoverLifter: true,
      supportsStainlessSteelJets: true,
      supportsLightedGrabBars: false
    },
    {
      id: 14,
      name: 'Trainer',
      displayName: 'Spa Trainer',
      series: 'Fitness Series',
      description: 'A spa designed for swimming in place combined with therapy seats for deep massage',
      peopleSupported: 6, // fits in the 5+ category
      jetOptions: [39, 40, 41],
      shellColors: [1],
      supportsTotalControlTherapy: true,
      supportsIceBucket: false,
      supportsPillowJet: true,
      supportsCrystalBall: false,
      supportsCupHolder: false,
      supportsLighting: true,
      supportsStereo: false,
      supportsOzonator: true,
      supportsSteps: true,
      supportsCoverLifter: true,
      supportsStainlessSteelJets: true,
      supportsLightedGrabBars: true
    }
  ]
});

export default HtModel;
