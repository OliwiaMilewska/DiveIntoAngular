export class Recipe{
    name: string;
    description: string;
    imagePath: string;

    constructor(name: string, desc: string, image: string){
        this.name = name;
        this.description = desc;
        this.imagePath = image;
    }
}