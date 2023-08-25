function addTwo(num: number) {
	return num + 2;
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
