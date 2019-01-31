const e = require('./enhancer');
const testItems = require('./testItems');

const items = testItems.items;
const levels = testItems.levels;

describe('the enhancer object', () => {
  describe('the success function', () => {
    test('returns a new item with its enhacement increased by 1 and new enhacement level reflected in the name', () => {
      items.map(item => {
        const levelIndex =
          item.enhancement !== 'PEN'
            ? levels.indexOf(item.enhancement) + 1
            : levels.indexOf(item.enhancement);
        expect(e.success(item)).toEqual({
          ...item,
          enhancement: levels[levelIndex],
          name: `[${levels[levelIndex]}] ${item.name}`
        });
      });
    });
    // test('return new item with the new enhacement level reflected in the name', () => {
    //   items.map(item => {
    //     expect(e.success(item)).toEqual({
    //       ...item,
    //       name: `[${
    //         levels[
    //           item.enhancement !== 'PEN'
    //             ? levels.indexOf(item.enhancement) + 1
    //             : levels.indexOf(item.enhancement)
    //         ]
    //       }] ${item.name}`
    //     });
    //   });
    // });
  });

  describe('the fail function', () => {});

  describe('the repair function', () => {
    test('returns a new item with the durability restored to 100', () => {
      items.map(item => {
        expect(e.repair(item)).toEqual({ ...item, durability: 100 });
      });
    });
  });
});
