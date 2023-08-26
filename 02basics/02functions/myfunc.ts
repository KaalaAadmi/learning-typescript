function addTwo(num: number): number {
	return num + 2;
	// return "hello"
}
addTwo(5);

function getUpper(val: string) {
	return val.toUpperCase();
}

function signUpUser(
	name: string,
	email: string,
	password: string,
	isPaid: boolean
) {}

let loginUser = (
	name: string,
	email: string,
	password: string,
	isPaid: boolean = false
) => {};

loginUser("john", "j@j.com", "1234");
getUpper("hello");

function getValues(myVal: number) {
	if (myVal > 5) {
		return true;
	}
	return "200 OK";
}

const getHello = (s: string): string => {
	return "";
};

// const heros=["thor",'batman','superman']
const heros = [1, 2, 3];

heros.map((hero): string => {
	return `${hero} is a hero`;
});

function consoleError(errmsg: string):void {
	console.error(errmsg);
}

function handleError(errmsg: string):void {
	console.error(errmsg);
}
