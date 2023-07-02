type Userr = {
    name: string,
    email: string,
    isActive: boolean
}

const superHeros: string[] = ["spiderman", "ironman", "capitan america"];
const heroPower: Array<number> = [1, 2, 3];
const tab: number[][] = [
    [1,2,3],
    [4,5,6]
];
const users: Userr[] = [];

superHeros.push("thor");
heroPower.push(2);
users.push({ name: "", email: "", isActive: false });