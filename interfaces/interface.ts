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

const arnav: Person = {
	dbId: 1,
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
