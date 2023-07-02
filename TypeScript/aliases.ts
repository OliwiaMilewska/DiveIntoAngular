type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUserWithAlias(user: User) {
}
let user: User = {
    name: "Oliwia",
    email: "oli@email.com",
    isActive: true
}
createUserWithAlias(user);
createUserWithAlias({ name: "Alek", email: "alek@email.com", isActive: false });