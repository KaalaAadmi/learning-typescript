"use strict";
function detectType(val) {
    // return val.toLowerCase() // error
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    // return account.isAdmin // error
    if ("isAdmin" in account) {
        console.log(account.isAdmin);
        return account.isAdmin;
    }
}
// instanceof and type predicates
// instanceof can only be used when the new keyword can be used to create an object. e.g.: Date.
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
        return;
    }
    else {
        console.log(x.toUpperCase());
        return;
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === "square") {
        return shape.side ** 2;
    }
    else if (shape.kind === "rectangle") {
        return shape.length * shape.width;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.width;
        // the default case should never be running, if it so happens that it has to get executed, then the shape type is not exhaustive, and the code will start screaming by giving squiggly lines. These lines are a great indicator for developers to understand that they are not doing an exhaustive check.
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
