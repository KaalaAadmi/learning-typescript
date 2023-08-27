// // interfaces provide a guideline and consistency for our code

// interface TakePhoto{
//   cameraMode:string;
//   filter:string;
//   burst:number;
// }

// interface Story{
//   createStory():void;
// }

// class Instagram implements TakePhoto,Story{
//   constructor(
//     public cameraMode:string,
//     public filter:string,
//     public burst:number
//   ){}
//   createStory(): void {
//       console.log("story was created!")
//   }
// }

// class YouTube implements TakePhoto{
//   constructor(
//     public cameraMode:string,
//     public filter:string,
//     public burst:number,
//     public short:string
//   ){}
// }
