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

  describe('the fail function', () => {
    test('returns the durability of an item decreased by 5, but not lower than 20, if enhancement is between +0 and +14', () => {
      expect(e.fail(items[0]).durability).toEqual(75); // enhancement level entering function: +0
      expect(e.fail(items[3]).durability).toEqual(55); // enhancement level entering function: +10
      expect(e.fail(items[4]).durability).toEqual(20); // enhancement level entering function: +0
    });
    test('returns the durability of an item decreased by 10, but not lower than 0, if enhancement is between +15 and TET', () => {
      expect(e.fail(items[2]).durability).toEqual(15); // enhancement level entering function: +15
      expect(e.fail(items[5]).durability).toEqual(0); // enhancement level entering function: TET
    });
    test('returns enhancement level decreased by 1 if current enhancement level is DUO, TRI, or TET', () => {
      expect(e.fail(items[5]).enhancement).toEqual('TRI'); // enhancement level entering function: TET
      expect(e.fail(items[6]).enhancement).toEqual('PRI'); // enhancement level entering function: PRI
      expect(e.fail(items[1]).enhancement).toEqual('PEN'); // enhancement level entering function: PEN
      expect(e.fail(items[3]).enhancement).toEqual('+10'); // enhancement level entering function: +10
    });
    test('returns the item name that reflects the enhancement change if the enhancement was effected', () => {
      expect(e.fail(items[2]).name).toEqual('[+15] Long Bow'); // enhancement level entering function: PRI
      expect(e.fail(items[5]).name).toEqual('[TRI] Steel Armor'); // enhancement level entering function: TET
      expect(e.fail(items[7]).name).toEqual('[DUO] Steel Knife'); // enhancement level entering function: TRI
      expect(e.fail(items[8]).name).toEqual('[PRI] Crossbow'); // enhancement level entering function: DUO
    });
  });

  describe('the repair function', () => {
    test('returns a new item with the durability restored to 100', () => {
      items.map(item => {
        expect(e.repair(item)).toEqual({ ...item, durability: 100 });
      });
    });
  });
});
