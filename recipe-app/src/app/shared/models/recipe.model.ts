import { Ingredient } from "./ingredient.model";

export class Recipe {
    name: string;
    description: string;
    imagePath: string;
    ingredients: Ingredient[];

    constructor(name: string, desc: string, image: string, ing: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = image;
        this.ingredients = ing;
    }
}