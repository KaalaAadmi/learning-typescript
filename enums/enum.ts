// Previously this is how we used to handle this
const AISLE = 0;
const MIDDLE = 1;
const WINDOW = 2;

let seat = -1;
if (seat === AISLE) {
} else if (seat === MIDDLE) {
} else if (seat === WINDOW) {
} else {
	// error
}

// Now with ts and enums it is much simpler:
// option 1
// enum SeatChoice{
//   AISLE=10,
//   MIDDLE=22,
//   WINDOW,
//   FOURTH=44
// }

// option 2
// enum SeatChoice{
//   AISLE="aisle",
//   MIDDLE="middle",
//   WINDOW="window",
//   FOURTH="fourth"
// }

// option 3
enum SeatChoice {
	AISLE = "aisle",
	MIDDLE = 3,
	WINDOW,
	FOURTH,
}

const abSeat = SeatChoice.AISLE;

// does not generate a lot of code. normal enum generates a lot of code.
const enum SeatChoice1 {
	AISLE = 10,
	MIDDLE = 22,
	WINDOW,
	FOURTH = 44,
}

const abNewSeat = SeatChoice1.AISLE;

export {};
