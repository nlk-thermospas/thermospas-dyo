import DS from 'ember-data';

var ShellColor = DS.Model.extend({
  //-- associations
  hotTubs: DS.hasMany('hotTub', { async: true }),
  htModels: DS.hasMany('htModel', { async: true }),

  //-- attributes
  name: DS.attr('string'),
  displayName: DS.attr('string'),
  previewImageUrl: DS.attr('string')
});

ShellColor.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'blue',
      displayName: 'Blue Stone',
      hotTubs: [1],
      previewImageUrl: '/assets/images/swatches/Swatches_BlueStone.jpg'
    },
    {
      id: 2,
      name: 'desert',
      displayName: 'Desert Stone',
      hotTubs: [2],
      previewImageUrl: '/assets/images/swatches/Swatches_DesertStone.jpg'
    },
    {
      id: 3,
      name: 'copper',
      displayName: 'Copper Beach',
      previewImageUrl: '/assets/images/swatches/Swatches_CopperBeach.jpg'
    },
    {
      id: 4,
      name: 'black',
      displayName: 'Black Opal',
      previewImageUrl: '/assets/images/swatches/Swatches_BlackOpal.jpg'
    },
    {
      id: 5,
      name: 'ocean',
      displayName: 'Ocean Wave',
      previewImageUrl: '/assets/images/swatches/Swatches_OceanWave.jpg'
    },
    {
      id: 6,
      name: 'silver',
      displayName: 'Silver Marble',
      previewImageUrl: '/assets/images/swatches/Swatches_SilverMarble.jpg'
    }
  ]
});

export default ShellColor;
