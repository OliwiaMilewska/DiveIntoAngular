abstract class TakePhoto2 {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    takingPhoto(): void {
        console.log("Taking photo...");
    }

    abstract createStory(): void
}

//const user = new TakePhoto2("test","Test"); Noł Noł

class Insta extends TakePhoto2 {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
    }

    createStory(): void {
        console.log("Creating story...");
    }
}
const user = new Insta("test","Test",7);
user.takingPhoto(); 