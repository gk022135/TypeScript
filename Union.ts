//<------Union ------>
// allows use to combinination two or more type of data types

let score: number | string | boolean = 33;

score = true;
score = "hi ji"
score = 45;  //all three data types are allowed


type Person = {
    username: string;
    id: number;
}
type Admin = {
    adminName : string;
    id: number;
}

let gaurav: Person | Admin = {adminName: "hitesh", id: 444}
gaurav = {username: "ramesh", id: 333}

function getDataId(id: number | string){
    console.log(`db id is: ${id}`)
}

getDataId(67);
getDataId("hi");




//Arrays

// const dataa: number[] = [1, 2, 3, 4, "4"] not allowed, only number allowed
const dataa: string | number[] = ["1",'2','3'] //error
const data2: string[] | number[] = [1,3,4,5, "3"]  //error because it allows either string value or number values

const data3: (string | number)[] = [1,2,3,"45","hi", 4, "ok"] // its allow both string or number together
const data4 : (string | boolean | number) = [true, 1, "haji"];

let pi: 3.14 = 3.14
pi = 3.45 // it do not allow any other value than 3.14

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "crew" // it not allow other than above third