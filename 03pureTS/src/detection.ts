function detectType(val: number | string) {
	// return val.toLowerCase() // error
	if (typeof val === "string") {
		return val.toLowerCase();
	}
	return val + 3;
}

function provideId(id: string | null) {
	if (!id) {
		console.log("Please provide ID");
		return;
	}
	id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
	if (strs) {
		if (typeof strs === "object") {
			for (const s of strs) {
				console.log(s);
			}
		} else if (typeof strs === "string") {
			console.log(strs);
		}
	}
}

// the in operator narrowing.
interface User {
	name: string;
	email: string;
}

interface Admin {
	name: string;
	email: string;
	isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
	// return account.isAdmin // error
	if ("isAdmin" in account) {
		console.log(account.isAdmin);
		return account.isAdmin;
	}
}

// instanceof and type predicates
// instanceof can only be used when the new keyword can be used to create an object. e.g.: Date.
function logValue(x: Date | string) {
	if (x instanceof Date) {
		console.log(x.toUTCString());
		return;
	} else {
		console.log(x.toUpperCase());
		return;
	}
}

// type predicates
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
	return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
	if (isFish(pet)) {
		pet;
		return "fish food";
	} else {
		pet;
		return "bird food";
	}
}

// discriminated unions and exhaustive checking
interface Circle {
	kind: "circle";
	radius: number;
}

interface Square {
	kind: "square";
	side: number;
}

interface Rectangle {
	kind: "rectangle";
	length: number;
	width: number;
}

// type Shape = Circle | Square;
type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
	if (shape.kind === "circle") {
		return Math.PI * shape.radius ** 2;
	} else if (shape.kind === "square") {
		return shape.side ** 2;
	} else if (shape.kind === "rectangle") {
		return shape.length * shape.width;
	}
}

function getArea(shape: Shape) {
	switch (shape.kind) {
		case "circle":
			return Math.PI * shape.radius ** 2;
		case "square":
			return shape.side ** 2;
		case "rectangle":
			return shape.length * shape.width;
		// the default case should never be running, if it so happens that it has to get executed, then the shape type is not exhaustive, and the code will start screaming by giving squiggly lines. These lines are a great indicator for developers to understand that they are not doing an exhaustive check.
		default:
			const _defaultForShape: never = shape;
			return _defaultForShape;
	}
}
