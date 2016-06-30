import DS from 'ember-data';

// The "glue" model that represents a specific hot tub configuration.
var HotTub = DS.Model.extend({
  //-- associations
  htModel: DS.belongsTo('htModel', { async: true }),
  jetOption: DS.belongsTo('jetOption', { async: true }),
  shellColor: DS.belongsTo('shellColor', { async: true }),
  cabinetColor: DS.belongsTo('cabinetColor', { async: true }),

  //-- attributes
  createdAt: DS.attr('date'),

  // Maybe an hot tub is associated with a customer based upon all of these
  // attributes? This would also make it easy for customers to re-build another
  // similar hot tub (which may be unlikely if not for far in the future?).
  customerName: DS.attr('string'),
  customerAddress: DS.attr('string'),
  customerCity: DS.attr('string'),
  customerState: DS.attr('string'),
  customerZipCode: DS.attr('string'),
  customerPhoneNumber: DS.attr('string'),
  customerEmail: DS.attr('string'),
  totalControlTherapy: DS.attr('boolean', { default: false }),
  iceBucket: DS.attr('boolean', { default: false }),
  pillowJet: DS.attr('boolean', { default: false }),
  crystalBall: DS.attr('boolean', { default: false }),
  cupHolder: DS.attr('boolean', { default: false }),
  lighting: DS.attr('boolean', { default: false }),
  stereo: DS.attr('boolean', { default: false }),
  ozonator: DS.attr('boolean', { default: false }),
  steps: DS.attr('boolean', { default: false }),
  coverLifter: DS.attr('boolean', { default: false }),
  stainlessSteelJets: DS.attr('boolean', { default: false }),
  lightedGrabBars: DS.attr('boolean', { default: false }),
  backgroundImageUrl: DS.attr('string'),
  cloudinaryPublicId: DS.attr('string'),
  irefval: DS.attr('string'),

  imageUrl: function() {
    return this.get('htModel.defaultImageUrl');
  }.property('htModel.defaultImageUrl'),

  shellImageUrl: function() {
    var shellColorName = this.get('shellColor.name'),
        htModelName = this.get('htModel.name'),
        shellsImagePath = '/assets/images/hot-tubs/shells/';

    return shellsImagePath + htModelName + '-' + shellColorName + '.png';
  }.property('htModel.name', 'shellColor.name'),

  cabinetImageUrl: function() {
    var cabinetColorName = this.get('cabinetColor.name'),
        htModelName = this.get('htModel.name'),
        cabinetsImagePath = '/assets/images/hot-tubs/cabinets/';

    return cabinetsImagePath + htModelName + '-' + cabinetColorName + '.png';
  }.property('htModel.name', 'cabinetColor.name'),

  optionsText: function() {
    var builtString = '';
    var prefix = '- ';
    var suffix = '\n';

    if (this.get('totalControlTherapy')) {
      builtString += prefix + 'Total Control Therapy<sup>®</sup>' + suffix;
    }

    if (this.get('iceBucket')) {
      builtString += prefix + 'Ice Bucket' + suffix;
    }

    if (this.get('pillowJet')) {
      builtString += prefix + 'Pillow Jet' + suffix;
    }

    if (this.get('crystalBall')) {
      builtString += prefix + 'Crystal Ball' + suffix;
    }

    if (this.get('cupHolder')) {
      builtString += prefix + 'Illuminated Cupholder' + suffix;
    }

    if (this.get('stainlessSteelJets')) {
      builtString += prefix + 'Stainless Steel Jets' + suffix;
    }

    if (this.get('lighting')) {
      builtString += prefix + 'LED Lighting' + suffix;
    }

    if (this.get('stereo')) {
      builtString += prefix + 'Stereo' + suffix;
    }

    if (this.get('ozonator')) {
      builtString += prefix + 'Ozonator' + suffix;
    }

    if (this.get('steps')) {
      builtString += prefix + 'Steps' + suffix;
    }

    if (this.get('coverLifter')) {
      builtString += prefix + 'Cover Lifter' + suffix;
    }

    if (this.get('lightedGrabBars')) {
      builtString += prefix + 'Lighted Grab Bars' + suffix;
    }

    return builtString;
  }.property('totalControlTherapy', 'iceBucket', 'pillowJet', 'crystalBall', 'cupHolder', 'lighting', 'stero', 'ozonator', 'steps', 'coverLifter', 'stainlessSteelJets', 'lightedGrabBars')
});

HotTub.reopenClass({
  FIXTURES: [
    {
      id: 1,
      createdAt: new Date(),
      customerName: 'Toni Tamarin',
      customerAddress: '123 Main St.',
      customerCity: 'New Bark',
      customerState: 'Colorado',
      customerZipCode: '12345',
      customerPhoneNumber: '123-456-7891',
      customerEmail: 'toni@example.com',
      htModel: 1,
      jetOption: 1,
      shellColor: 1,
      cabinetColor: 1,
      htOptions: [1, 2, 3]
    },
    {
      id: 2,
      createdAt: new Date('October 10, 2013 12:42:00'),
      customerName: 'Ash Orangish',
      customerAddress: '321 Applegate Rd.',
      customerCity: 'Estus Flask',
      customerState: 'Colorado',
      customerZipCode: '12346',
      customerPhoneNumber: '123-456-7891',
      customerEmail: 'ash@example.com',
      htModel: 2,
      jetOption: 4,
      shellColor: 2,
      cabinetColor: 2,
      htOptions: [2, 5, 7]
    }
  ]
});

export default HotTub;
