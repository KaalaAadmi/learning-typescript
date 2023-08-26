const User = {
	name: "John",
	email: "hellO@hello.com",
	isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser={ name: "hello", isPaid: false,email:"h@h.com" }

createUser(newUser);

function createCourse(): { name: string; price: number } {
	return { name: "reactjs", price: 399 };
}
