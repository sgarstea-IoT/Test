const { totalPrice } = require('../moduleTotalPrice/moduleTotalPrice');

describe("Total price", () => {
    test("500 items, 1$ per item, ON", () => {
        expect(totalPrice(500,1,"ON")).toBe(565.00);
    });
    test("3600 items, 2.25$ per item, MI", () => {
        expect(totalPrice(3600,2.25,"MI")).toBe(7984.98);
    });
    test("3000 items, 2.5$ per item, AB", () => {
        expect(totalPrice(3000,2.5,"AB")).toBe(7323.75);
    });
    test("500 items, 10$ per item, DE", () => {
        expect(totalPrice(500,10,"DE")).toBe(4750.00);
    });
    test("1000 items, 10$ per item, DE", () => {
        expect(totalPrice(1000,10,"DE")).toBe(9000.00);
    });
})


