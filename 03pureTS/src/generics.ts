// generic basics
const score: Array<number> = []; // Array<number> is a generic type
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
	return val;
}

function identityTwo(val: any): any {
	return val;
}
// generics are used to make the above function more flexible. the moment the value passed to the function is number, then the rest of the Type becomes number. If the value passed to the function is string, then the rest of the Type becomes string. This is the power of generics.
function identityThree<Type>(val: Type): Type {
	return val;
}

function identityFour<T>(val: T): T {
	return val;
}

interface Bottle {
	brand: string;
	type: number;
}

identityFour<Bottle>({ brand: "abc", type: 1 });

// generics in array and arrow functions

function getSearchProducts<T>(products: T[]): T {
	// do some database operations
	const myIndex = 3;
	return products[myIndex];
}
// arrow function
const getMoreProducts = <T>(products: T[]): T => {
	// do some database operations
	const myIndex = 4;
	return products[myIndex];
};
