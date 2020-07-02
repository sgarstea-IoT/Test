const { getDiscount } = require('../moduleTotalPrice/moduleTotalPrice');

const DISCOUNTS = [
    {value: 1000, rate: 3},
    {value: 5000, rate: 5},
    {value: 7000, rate: 7},
    {value: 10000, rate: 10}
]

describe("Dicount value($)", () => {
    test("Discount value for amount 500$ : <1000 => discount 0%", () => {
        expect(getDiscount(500, DISCOUNTS)).toBe(0);
    });
    test("Discount value for amount 1000$ : =1000 => discount 3%", () => {
        expect(getDiscount(1000, DISCOUNTS)).toBe(30);
    });
    test("Discount value for amount 1500$ : >1000 && <5000 => discount 3%", () => {
        expect(getDiscount(1500, DISCOUNTS)).toBe(45);
    });
    test("Discount value for amount 10000$ : =10000 => discount 10%", () => {
        expect(getDiscount(10000, DISCOUNTS)).toBe(1000);
    });
    test("Discount value for amount 10010$ : >10000 => discount 10%", () => {
        expect(getDiscount(10010, DISCOUNTS)).toBe(1001);
    });
})
