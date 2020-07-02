'use strict'

const DISCOUNTS = [
    {value: 1000, rate: 3},
    {value: 5000, rate: 5},
    {value: 7000, rate: 7},
    {value: 10000, rate: 10}
]

const TAX = Object.freeze({
    AB: 5,
    ON: 13,
    QC: 14.9,
    MI: 6,
    DE: 0,
});

function calculateAmount(numberOfItems, costPerItem,) {
    return numberOfItems * costPerItem;
}

function getDiscount(amount, arrayOfdiscount) {
    const discount = arrayOfdiscount.slice(); // For create copy of DISCOUNT
    discount.push({value: amount, rate: 0});
    discount.sort((a, b) => {
        return a.value - b.value;
    });
    const index = discount.findIndex(item => item.value == amount && item.rate == 0);
    const discountRate = index == 0 ? 0 : discount[index - 1].rate;
    return amount * discountRate / 100;
}

function getTax(amount, discount, tax_rate) {
    return (amount - discount) * tax_rate / 100;
}

function calculateTotal(amount, discount, tax) {
    return amount - discount + tax;
}

function totalPrice(numberOfItems, costPerItem, stateCode) {
    const amount = calculateAmount(numberOfItems, costPerItem);
    const discount = getDiscount(amount, DISCOUNTS);
    const tax = getTax(amount, discount, TAX[stateCode]);
    const total = calculateTotal(amount, discount, tax);
    return total;
}

module.exports = {
    getDiscount,
    totalPrice
};







