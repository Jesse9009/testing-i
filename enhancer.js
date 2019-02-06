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
  '+11',
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
  fail: item => {
    const enhancement = item.enhancement;
    const levelIndex =
      enhancement === 'DUO' || enhancement === 'TRI' || enhancement === 'TET'
        ? levels.indexOf(enhancement) - 1
        : levels.indexOf(enhancement);
    const getDurability = item => {
      if (levels.indexOf(enhancement) > 14) {
        return item.durability - 10 < 0 ? 0 : item.durability - 10;
      } else {
        return item.durability - 5 < 20 ? 20 : item.durability - 5;
      }
    };

    return {
      ...item,
      name: `[${levels[levelIndex]}] ${item.name}`,
      durability: getDurability(item),
      enhancement: levels[levelIndex]
    };
  },
  repair: item => {
    if (!item.hasOwnProperty('durability')) {
      throw new Error('no durability on item');
    }
    return { ...item, durability: 100 };
  }
};
