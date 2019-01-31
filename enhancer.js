const levels = [
  '0',
  '+1',
  '+2',
  '+3',
  '+4',
  '+5',
  '+6',
  '+7',
  '+8',
  '+9',
  '+10',
  '1+1',
  '+12',
  '+13',
  '+14',
  '+15',
  'PRI',
  'DUO',
  'TRI',
  'TET',
  'PEN'
];
module.exports = {
  success: item => {
    const enhancement = item.enhancement;
    const levelIndex =
      enhancement !== 'PEN'
        ? levels.indexOf(enhancement) + 1
        : levels.indexOf(enhancement);
    return {
      ...item,
      enhancement: levels[levelIndex],
      name: `[${levels[levelIndex]}] ${item.name}`
    };
  },
  fail: item => {},
  repair: item => {
    if (!item.hasOwnProperty('durability')) {
      throw new Error('no durability on item');
    }
    return { ...item, durability: 100 };
  }
};
