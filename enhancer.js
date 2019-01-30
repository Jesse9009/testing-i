module.exports = {
  success: item => {},
  fail: item => {},
  repair: item => {
    // const newItem = { ...item, durability: 100 };
    // return newItem;
    if (!item.hasOwnProperty('durability')) {
      throw new Error('no durability on item');
    }
    return { ...item, durability: 100 };
  }
};
