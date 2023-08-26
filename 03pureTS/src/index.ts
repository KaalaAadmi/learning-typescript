// pure ts start
// console.log("typescript is here!")
// console.log("typescript is amazing!")

// next video
class User {
	email: string;
	name: string;
	readonly city: string = "mumbai";
	constructor(email: string, name: string) {
		this.email = email;
		this.name = name;
	}
}

const arnav = new User("a@a.com", "arnav");
// arnav.city=2 // error
// arnav.city="dublin" // ok // error when city is declared as readonly.
