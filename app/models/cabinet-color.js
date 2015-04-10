import DS from 'ember-data';

var CabinetColor = DS.Model.extend({
  //-- associations
  hotTubs: DS.hasMany('hotTub', { async: true }),
  htModels: DS.hasMany('htModel', { async: true }),

  //-- attributes
  name: DS.attr('string'),
  displayName: DS.attr('string'),
  previewImageUrl: DS.attr('string')
});

CabinetColor.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'teak',
      displayName: 'Burmese Teak',
      hotTubs: [1],
      previewImageUrl: '/assets/images/swatches/Swatches_BurmeseTeak.jpg'
    },
    {
      id: 2,
      name: 'cherry',
      displayName: 'American Cherry',
      hotTubs: [2],
      previewImageUrl: '/assets/images/swatches/Swatches_AmericanCherry.jpg'
    },
    {
      id: 3,
      name: 'gray',
      displayName: 'Nantucket Gray',
      previewImageUrl: '/assets/images/swatches/Swatches_NantucketGray.jpg'
    }
  ]
});

export default CabinetColor;
