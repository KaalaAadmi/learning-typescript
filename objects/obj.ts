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
