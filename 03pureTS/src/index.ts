// pure ts start
// console.log("typescript is here!")
// console.log("typescript is amazing!")

// classes
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
	readonly city: string = "mumbai";
	constructor(
		public email: string,
		public name: string // private userId:string,
	) {}
}

const arnav1 = new User2("a@a.com", "arnav");

// getters and setters
class User3 {
	private _courseCount = 1;
	readonly city: string = "mumbai";
	constructor(
		public email: string,
		public name: string // private userId:string,
	) {}
	get getAppleEmail(): string {
		return `apple${this.email}`;
	}

	private deleteToken() {
		console.log("token is deleted!");
	}

	// getters can have a return type
	get courseCount(): number {
		return this._courseCount;
	}
	// setter cannot have a return type
	set courseCount(num: number) {
		if (num <= 1) {
			throw new Error("Course count should be more than 1");
		}
		this._courseCount = num;
	}
}

const arnav3 = new User3("a@a.com", "arnav");
// arnav3.deleteToken(); // error
