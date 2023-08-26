"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = "55";
score = 44;
var kaalu = { name: "kaalu", id: 1 };
kaalu = { username: "kaalu", id: 234 };
function getDbId(id) {
    // id.toLowercase(); // error
    if (typeof id === "string") {
        id.toLowerCase();
    }
    // make api call
    console.log("DB id is: ".concat(id));
}
getDbId(123);
getDbId("123");
// arrays
var data = [1, 2, 3]; // array of numbers
var data2 = ["hello", "world"]; // array of strings
// const data3:string[]|number[]=["1",'2',3] //error
var data3 = ["1", "2", 3]; // array of strings or numbers
var pi = 3.14;
// pi=3.145 // error
var seatAllotment;
seatAllotment = "aisle";
