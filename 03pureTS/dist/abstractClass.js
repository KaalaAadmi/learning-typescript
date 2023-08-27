"use strict";
// abstract classes cannot create an object. they are used to create other classes. They are practically a blueprint for other classes.
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
const ab = new TakePhoto("portrait", "vintage");
class TakePhoto1 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculation
        return 8;
    }
}
// const ab1=new TakePhoto1("portrait","vintage"); // error
class Instagram extends TakePhoto1 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("sepia was applied!");
    }
}
const ab2 = new Instagram("portrait", "vintage", 3);
ab2.getReelTime();
