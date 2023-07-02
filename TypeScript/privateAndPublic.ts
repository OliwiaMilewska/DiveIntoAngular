/// Ex 1
class Persona {
    email: string;
    private name: string;
    readonly city: string = "Olsztyn";

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }

    private deleteToken(): void{
        console.log("Deleting token...");
    }
}

const  persona = new Persona("test@email.com", "Peter");
// persona.city = "Gdynia;"
// persona.name = "John";
// persona.deletetoken();

/// Ex 2
class Persona2 {
    readonly city: string = "Olsztyn";
    constructor(
        public email: string, 
        public name: string, 
        private userId: number) {
    }
}