/// Ex 1
class Persona3 {
    readonly city: string = "Olsztyn"
    private courseCount = 1;
    constructor(
        public email: string,
        public name: string) {
    }

    private deleteToken(): void{
        console.log("Deleting token...");
    }

    get getCompanyEmail(): string {
        return `company:${this.email};`
    }

    get getCourseCount(): number {
        return this.courseCount;
    }

    set setCourseCount(num: number) {
        if (num <= 1) {
            throw new Error("Course count should be more than 1.");
        }
        this.courseCount = num;
    }
}