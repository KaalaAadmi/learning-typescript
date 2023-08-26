let score: number | string = 33;
score = "55";
score = 44;
// score=true; // error

type User = {
	name: string;
	id: number;
};
type Admin = {
	username: string;
	id: number;
};

let kaalu: User | Admin = { name: "kaalu", id: 1 };

kaalu = { username: "kaalu", id: 234 };

function getDbId(id: number | string) {
	// id.toLowercase(); // error
	if (typeof id === "string") {
		id.toLowerCase();
	}
	// make api call
	console.log(`DB id is: ${id}`);
}

getDbId(123);
getDbId("123");

// arrays
const data: number[] = [1, 2, 3]; // array of numbers
const data2: string[] = ["hello", "world"]; // array of strings
// const data3:string[]|number[]=["1",'2',3] //error
const data3: (string | number)[] = ["1", "2", 3]; // array of strings or numbers

let pi: 3.14 = 3.14;
// pi=3.145 // error

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment="crew"; // error

export {};
