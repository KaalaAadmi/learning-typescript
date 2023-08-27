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
