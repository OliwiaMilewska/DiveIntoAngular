const User = {
    name: "Oliwia",
    email: "test@email.com",
    isActive: true
}

function createUser({ email: string, isActive: boolean }) {
}
createUser({ email: "test2@email.com", isActive: false });

let newUser = { name: "Alek", email: "test3@email.com", isActive: false }
createUser(newUser); // It should be ERROR!!!!

//Return Object
function createCourse(): { name: string, price: number } {
    return { name: "TypeScript course", price: 359.99 };
}