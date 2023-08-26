"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Previously this is how we used to handle this
var AISLE = 0;
var MIDDLE = 1;
var WINDOW = 2;
var seat = -1;
if (seat === AISLE) {
}
else if (seat === MIDDLE) {
}
else if (seat === WINDOW) {
}
else {
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
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var abSeat = SeatChoice.AISLE;
var abNewSeat = 10 /* SeatChoice1.AISLE */;
