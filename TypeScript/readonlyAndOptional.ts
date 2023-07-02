/// Ex 1
type User2 = {
    readonly id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditcardDetail?: number // number | nullable
}

let user2: User2 = {
    id: "35-fdg-45sd-65",
    name: "Oliwia",
    email: "oli@email.com",
    isActive: true
}

user2.email = "oliwia@email.com";
//user2.id = "aaa";  Cannot assign to 'id' because it is a read-only property

let user3: User2 = {
    id: "35-fdg-45sd-65",
    name: "Oliwia",
    email: "oli@email.com",
    isActive: true,
    creditcardDetail: 123456789
}

/// Ex 2
type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = {
    cardnumber: cardNumber,
    carDate: cardDate
}

type cardDetails2 = cardNumber & cardDate & {
    cvv: number
} // not a good practice