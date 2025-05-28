const inventoryActions = require('../inventory');
const {expect} = require('@jest/globals');

describe("calculateDiscount", ()=> {
test("applies a valid discount rate", () => {
    expect(inventoryActions.calculateDiscount(100, 0.1)).toEqual(90);
});

test("handles an invalid discount rate gracefully", () => {
    expect(inventoryActions.calculateDiscount(100, -0.1)).toEqual(null);
});

test("handles edge case with price of 0", () => {
    expect(inventoryActions.calculateDiscount(0, 0.2)).toEqual(0);
});
});