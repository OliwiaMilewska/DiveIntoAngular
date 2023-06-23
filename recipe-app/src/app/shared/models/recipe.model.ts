import { Ingredient } from "./ingredient.model";

export class Recipe {
    id: number;
    name: string;
    description: string;
    imagePath: string;
    ingredients: Ingredient[];

    constructor(id: number, name: string, desc: string, image: string, ing: Ingredient[]) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imagePath = image;
        this.ingredients = ing;
    }
}