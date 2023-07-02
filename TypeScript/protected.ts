/// Ex 1
class Persona4 {
    readonly city: string = "Olsztyn"
    private courseCount = 1;
    protected importantSth = 492856;
    constructor(
        public email: string,
        public name: string) {
    }

    private deleteToken(): void {
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

class SubPersona extends Persona4 {
    isFamily: boolean = true;
    changeCourseCount() {
        this.setCourseCount = 4;
    }
    changeImportant(){
        this.importantSth = 0;
    }
}