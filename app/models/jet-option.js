import DS from 'ember-data';

var JetOption = DS.Model.extend({
  //-- associations
  hotTubs: DS.hasMany('hotTub', { async: true }),
  htModel: DS.belongsTo('htModel', { async: true }),

  //-- attributes
  jetRange: DS.attr('string'),
  optionClass: DS.attr('string'),
  imageUrl: function() {
    var optionClass = this.get('optionClass'),
        htModelName = this.get('htModel.name'),
        jetsImagePath = '/assets/images/hot-tubs/jets/';

    return jetsImagePath + htModelName + '-' + optionClass + '.png';
  }.property('optionClass', 'htModel.name'),
  peoplePreviewImageUrl: function() {
    var optionClass = this.get('optionClass'),
        htModelName = this.get('htModel.name'),
        jetsImagePath = '/assets/images/hot-tubs/people/';

    return jetsImagePath + htModelName + '-' + optionClass + '.png';
  }.property('optionClass', 'htModel.name')
});

JetOption.reopenClass({
  FIXTURES: [
    {
      id: 1,
      htModel: 1,
      jetRange: '21-29',
      optionClass: 'Silver'
    },
    {
      id: 2,
      htModel: 1,
      jetRange: '41-50',
      optionClass: 'Gold'
    },
    {
      id: 3,
      htModel: 1,
      jetRange: '51-70',
      optionClass: 'Platinum'
    },
    {
      id: 4,
      htModel: 2,
      jetRange: '21-29',
      optionClass: 'Silver'
    },
    {
      id: 5,
      htModel: 2,
      jetRange: '30-40',
      optionClass: 'Gold'
    },
    {
      id: 6,
      htModel: 2,
      jetRange: '51-70',
      optionClass: 'Diamond'
    },
    {
      id: 7,
      htModel: 4,
      jetRange: '30-40',
      optionClass: 'Silver'
    },
    {
      id: 8,
      htModel: 4,
      jetRange: '41-50',
      optionClass: 'Gold'
    },
    {
      id: 9,
      htModel: 5,
      jetRange: '51-70',
      optionClass: 'Silver'
    },
    {
      id: 10,
      htModel: 5,
      jetRange: '71-85',
      optionClass: 'Gold'
    },
    {
      id: 11,
      htModel: 5,
      jetRange: '86-120',
      optionClass: 'Platinum'
    },
    {
      id: 12,
      htModel: 6,
      jetRange: '30-40',
      optionClass: 'Silver'
    },
    {
      id: 13,
      htModel: 6,
      jetRange: '41-50',
      optionClass: 'Gold'
    },
    {
      id: 14,
      htModel: 6,
      jetRange: '86-120',
      optionClass: 'Diamond'
    },
    {
      id: 15,
      htModel: 3,
      jetRange: '30-40',
      optionClass: 'Silver'
    },
    {
      id: 16,
      htModel: 3,
      jetRange: '41-50',
      optionClass: 'Gold'
    },
    {
      id: 18,
      htModel: 9,
      jetRange: '51-70',
      optionClass: 'Gold'
    },
    {
      id: 19,
      htModel: 9,
      jetRange: '86-120',
      optionClass: 'Diamond'
    },
    {
      id: 20,
      htModel: 10,
      jetRange: '41-50',
      optionClass: 'Silver'
    },
    {
      id: 21,
      htModel: 10,
      jetRange: '51-70',
      optionClass: 'Gold'
    },
    {
      id: 22,
      htModel: 10,
      jetRange: '71-85',
      optionClass: 'Platinum'
    },
    {
      id: 23,
      htModel: 10,
      jetRange: '86-120',
      optionClass: 'Diamond'
    },
    {
      id: 24,
      htModel: 8,
      jetRange: '30-40',
      optionClass: 'Silver'
    },
    {
      id: 25,
      htModel: 8,
      jetRange: '41-50',
      optionClass: 'Gold'
    },
    {
      id: 26,
      htModel: 8,
      jetRange: '86-120',
      optionClass: 'Diamond'
    },
    {
      id: 27,
      htModel: 7,
      jetRange: '41-50',
      optionClass: 'Silver'
    },
    {
      id: 28,
      htModel: 7,
      jetRange: '51-70',
      optionClass: 'Gold'
    },
    {
      id: 29,
      htModel: 13,
      jetRange: '30-40',
      optionClass: 'Silver'
    },
    {
      id: 30,
      htModel: 13,
      jetRange: '41-50',
      optionClass: 'Gold'
    },
    {
      id: 31,
      htModel: 13,
      jetRange: '51-70',
      optionClass: 'Platinum'
    },
    {
      id: 32,
      htModel: 13,
      jetRange: '71-85',
      optionClass: 'Diamond'
    },
    {
      id: 33,
      htModel: 12,
      jetRange: '30-40',
      optionClass: 'Gold'
    },
    {
      id: 34,
      htModel: 12,
      jetRange: '51-70',
      optionClass: 'Diamond'
    },
    {
      id: 35,
      htModel: 11,
      jetRange: '51-70',
      optionClass: 'Silver'
    },
    {
      id: 36,
      htmodel: 11,
      jetRange: '71-85',
      optionClass: 'Gold'
    },
    {
      id: 37,
      htmodel: 11,
      jetRange: '86-120',
      optionClass: 'Platinum'
    },
    {
      id: 38,
      htmodel: 11,
      jetRange: '121-172',
      optionClass: 'Diamond'
    },
    {
      id: 39,
      htmodel: 14,
      jetRange: '21-29',
      optionClass: 'Silver'
    },
    {
      id: 40,
      htmodel: 14,
      jetRange: '41-50',
      optionClass: 'Gold'
    },
    {
      id: 41,
      htmodel: 14,
      jetRange: '71-85',
      optionClass: 'Platinum'
    }
  ]
});

export default JetOption;
