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
var arnav = {
    dbId: 1,
    githubToken: "123",
    role: "admin",
    email: "a@a.com",
    userId: 12345,
    startTrial: function () {
        return "trial started";
    },
    getCoupon: function (name, off) {
        return 10;
    },
};
arnav.email = "artnav@arnav.com";
// arnav.dbId = 2; // error
// arnav.email=3; // error
