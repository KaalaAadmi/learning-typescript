"use strict";
// pure ts start
// console.log("typescript is here!")
// console.log("typescript is amazing!")
// classes
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
// private and public - default is public. to declare private in js, use # before the variable name
// class User2 {
// 	public email: string;
// 	name: string;
// 	private readonly city: string = "mumbai";
// 	constructor(email: string, name: string) {
// 		this.email = email;
// 		this.name = name;
// 	}
// }
// const arnav1 = new User2("a@a.com", "arnav");
// arnav1.city // error
class User2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "mumbai";
    }
}
const arnav1 = new User2("a@a.com", "arnav");
