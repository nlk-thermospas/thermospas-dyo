import DS from 'ember-data';

var HtOption = DS.Model.extend({
  //-- associations
  hotTubs: DS.hasMany('hotTub', { async: true }),
  htModels: DS.hasMany('htModel', { async: true }),

  //-- attributes
  name: DS.attr('string'),
  description: DS.attr('string'),
  isSelected: DS.attr('boolean',  { defaultValue: false })
});

HtOption.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Total Control Therapy',
      description: 'Allows each person to independently control the jet intensity of their seating area from a mild, soothing sensation to a powerful, invigorating massage with independent pumps and patented throttle control valve.'
    },
    {
      id: 2,
      name: 'Pillow Jet',
      description: "Hidden behind the industry's most comfortable built-in pillow is a specialized pillow jet designed to massage your neck and shoulders. Plus, easily control the massage intensity with a convenient control valve."
    },
    {
      id: 3,
      name: 'Stainless Steel Jets',
      description: 'Stainless steel jets bring a higher level of elegance and sophistication to your hot tub environment and ensure a lifetime of exceptional durability.'
    },
    {
      id: 4,
      name: 'Ice Bucket',
      description: 'The uniquely designed, removable ice bucket keeps your favorite beverages chilled, comes with four built-in cup holders, and can easily be reversed into a convenient serving tray.'
    },
    {
      id: 5,
      name: 'Stereo',
      description: 'Enjoy superb sound quality with a deluxe sound system capable of handling iPods, MP3 players, and AM/FM receivers. Options include a built-in control panel, waterproof speakers and a hidden sub woofer.'
    },
    {
      id: 6,
      name: 'Lighted Grab Bars',
      description: 'Provides additional support for safely entering and exiting your hot tub at night, as well as additional mood lighting for your Thermospas&reg; experience.'
    },    
    {
      id: 7,
      name: 'LED Lighting',
      description: 'Enhance your Thermospas&reg; experience with stunning and elegant lighting effects for romantic ambiance, entertaining guests, and for nighttime safety. Choose from 8 available colors, or slowly cycle through each color.'
    },
    {
      id: 8,
      name: 'Crystal Ball',
      description: 'Activated by a small water jet, this elegant spinning ball can be illuminated with a choice of 8 distinct colors creating a relaxing atmosphere for your spa experience.'
    },
    {
      id: 9,
      name: 'Illuminated Cupholder',
      description: 'The convenient and fun custom molded cup holder illuminates your drink from below. Great for nighttime entertaining with friends and family.'
    },
    {
      id: 10,
      name: 'Ozonators',
      description: 'Ozone is a natural purifier that instantly oxidizes unwanted bacteria, mold, spores, cysts, mildew and viruses up to 3,000 times more quickly than chlorine or bromine.'
    },
    {
      id: 11,
      name: 'Steps',
      description: 'Thermospas&reg; is the only hot tub manufacturer that designs and customizes wrap around step packages to complete your perfect hot tub.'
    },
    {
      id: 12,
      name: 'Cover Lifters',
      description: 'Allows anyone to effortlessly remove and replace your ThermoSpas® cover simply and easily. Great for any age and those with physical difficulties.'
    }

  ]
});

export default HtOption;
