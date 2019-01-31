const e = require('./enhancer');
const testItems = require('./testItems');

const items = testItems.items;
const levels = testItems.levels;

describe('the enhancer object', () => {
  describe('the success function', () => {
    test('returns a new item with its enhacement increased by 1', () => {
      expect(e.success(items[0]).enhancement).toEqual('+1');
      expect(e.success(items[1]).enhancement).toEqual('PEN');
      expect(e.success(items[2]).enhancement).toEqual('PRI');
    });
    test('return new item with the new enhacement level reflected in the name', () => {
      expect(e.success(items[0]).name).toEqual('[+1] Elvan Sword');
      expect(e.success(items[1]).name).toEqual('[PEN] Elvan Shield');
      expect(e.success(items[2]).name).toEqual('[PRI] Long Bow');
    });
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
