// abstract classes cannot create an object. they are used to create other classes. They are practically a blueprint for other classes.
class TakePhoto {
	constructor(public cameraMode: string, public filter: string) {}
}

const ab = new TakePhoto("portrait", "vintage");

abstract class TakePhoto1 {
	constructor(public cameraMode: string, public filter: string) {}
	// getSepia():void // error
	abstract getSepia(): void; // abstract methods cannot have a body
	getReelTime(): number {
		// some complex calculation
		return 8;
	}
}

// const ab1=new TakePhoto1("portrait","vintage"); // error

class Instagram extends TakePhoto1 {
	constructor(
		public cameraMode: string,
		public filter: string,
		public burst: number
	) {
		super(cameraMode, filter);
	}

	getSepia(): void {
		console.log("sepia was applied!");
	}
}

const ab2 = new Instagram("portrait", "vintage", 3);

ab2.getReelTime();
