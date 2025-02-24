//<-----readonly------->

type Userr = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    crediDeyails? : number //optional:- matlab dena hai ton do nahi toh mat do
}
let myUser: Userr = {
    _id : "1234",
    name: "",
    email: "",
    isActive: true,
    //yaha maine creditDetails nahi dala hai ye  optional hai by this sign ?
}
// myUser._id = "1234245" // you can't access because of readonly key word

function createUser (u: Userr){

}

type cardNumber = {
    cardNumber: string
}
type cardDate = {
    carDate: string
}

// combining above two types and make new types:- uisng existing types
type cardDetailss = cardNumber & cardDate &{
    cvv : number
}