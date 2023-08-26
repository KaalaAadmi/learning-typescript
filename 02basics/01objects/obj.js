var User = {
    name: "John",
    email: "hellO@hello.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "hello", isPaid: false, email: "h@h.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createTypeUser(user) {
    return user;
}
createTypeUser({ name: "hello", email: "hello@hello.com", isActive: true });
var myUser = {
    _id: "123",
    name: "hello",
    email: "h@h.com",
    isActive: true,
};
myUser.isActive = false;
