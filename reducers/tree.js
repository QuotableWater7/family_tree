'use strict';

export default function (state, action) {
  return {
    root: {
      id: 1,
      full_name: 'A1',
      hair_color: 'blonde',
      children: [
        {
          id: 2,
          full_name: 'B1',
          hair_color: 'black',
          children: [
            {
              id: 3,
              full_name: 'C1',
              hair_color: 'green'
            }
          ]
        },
        {
          id: 4,
          full_name: 'B2',
          hair_color: 'blue',
          children: [
            {
              full_name: 'C2',
              hair_color: 'orange'
            }
          ]
        }
      ]
    }
  };
}
