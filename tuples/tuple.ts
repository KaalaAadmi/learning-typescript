// const user:(string|number)[]=['ab']
let tUser: [string, number, boolean];

tUser = ["hello", 123, true];
// tUser=[123,"hello",true,]; // error

let rgb: [number, number, number] = [255, 255, 255];

type User = [number, string];
const newUser: User = [123, "hello@hello.com"];
// newUser[1]=123; // error
newUser[1] = "hi.com";
// newUser.push(false);// error
export {};
