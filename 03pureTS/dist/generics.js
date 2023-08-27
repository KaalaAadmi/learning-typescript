"use strict";
// generic basics
const score = []; // Array<number> is a generic type
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// generics are used to make the above function more flexible. the moment the value passed to the function is number, then the rest of the Type becomes number. If the value passed to the function is string, then the rest of the Type becomes string. This is the power of generics.
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
identityFour({ brand: "abc", type: 1 });
// generics in array and arrow functions
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
// arrow function
const getMoreProducts = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valueOne, valueTwo) {
    return {
        valueOne,
        valueTwo,
    };
}
anotherFunction(3, { connection: "abc", username: "abc", password: "abc" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
