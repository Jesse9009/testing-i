const e = require('./enhancer');
const testItems = require('./testItems');

const items = testItems.items;

describe('the enhancer object', () => {
  describe('the success function', () => {});

  describe('the fail function', () => {});

  describe('the repair function', () => {
    test('returns a new item with the durability restored to 100', () => {
      items.map(item => {
        expect(e.repair(item)).toEqual({ ...item, durability: 100 });
      });
    });
  });
});
