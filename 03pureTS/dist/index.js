"use strict";
// pure ts start
// console.log("typescript is here!")
// console.log("typescript is amazing!")
// next video
class User {
    constructor(email, name) {
        this.city = "mumbai";
        this.email = email;
        this.name = name;
    }
}
const arnav = new User("a@a.com", "arnav");
// arnav.city=2 // error
// arnav.city="dublin" // ok // error when city is declared as readonly.
