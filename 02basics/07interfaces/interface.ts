interface Person {
	readonly dbId: number;
	email: string;
	userId: number;
	googleId?: string;
	// option 1 for functions
	// startTrial: () => string;
	// option 2 for functions
	startTrial(): string;
	getCoupon(couponName: string, value: number): number;
}
// reopening an interface
interface Person {
	githubToken: string;
}
// inheritance in interfaces
interface Admin extends Person {
	role: "admin" | "ta" | "learner";
}

// const arnav: Person = {
// 	dbId: 1,
//   githubToken: "123",
// 	email: "a@a.com",
// 	userId: 12345,
// 	startTrial: () => {
// 		return "trial started";
// 	},
// 	getCoupon: (name: "arnav10", off: 10) => {
// 		return 10;
// 	},
// };

const arnav: Admin = {
	dbId: 1,
	githubToken: "123",
	role: "admin",
	email: "a@a.com",
	userId: 12345,
	startTrial: () => {
		return "trial started";
	},
	getCoupon: (name: "arnav10", off: 10) => {
		return 10;
	},
};

arnav.email = "artnav@arnav.com";
// arnav.dbId = 2; // error
// arnav.email=3; // error
