const User = {
	name: "John",
	email: "hellO@hello.com",
	isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "hello", isPaid: false, email: "h@h.com" };

createUser(newUser);

function createCourse(): { name: string; price: number } {
	return { name: "reactjs", price: 399 };
}

// type aliases:
type User = {
	name: string;
	email: string;
	isActive: boolean;
};

function createTypeUser(user: User):User {
  return user;
}

createTypeUser({ name: "hello", email: "hello@hello.com", isActive: true });


// readonly and optional types:

type User1 = {
	readonly _id: string; // signifies that this property is readonly
	name: string;
	email: string;
	isActive:boolean;
	creditCardDetails?: number; // signifies that this property is optional
}

let myUser:User1={
	_id: "123",
	name: "hello",
	email: "h@h.com",
	isActive: true,
}

myUser.isActive = false;
// myUser._id = "456"; // error

type cardNumber={
	cardnumber:string;
}

type cardDate={
	carddate:string;
}

type cardDetails=cardNumber & cardDate&{
	cvv:number;
};