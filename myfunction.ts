

// function addTwo(num){
//     num.toUppercase()  // it allow to do this becaue of "any" there is no type check
//     return num + 2;
// }

// addTwo(5);   //any 

//<----- fixing above issue ---->
function addTwo(num : number){
    return num + 2
}
addTwo(5);


function getUpper(val: string){
    return val.toUpperCase()
}
getUpper("Gaurav")


function signUser(name: string, email: string, isPaid: boolean){
     //you can do your self
}
signUser("Gaurav", "gk0221354@", true)


let loginUser = (name: string, email: string, isPaid: boolean = false) => {}
loginUser("gaurav", "g@.com")
//<---here 3rd param is defautl given as false ---->

//<------- return ke bare mein padehnge---------->
//how can return more accurate value from function

function addNum(num: number){
    return "Guarav"
}
let newValue = addNum(45);  //here no error given by typescript  


//resolve above problem 
function addition(num: number) : number{
    // return "gaurav"  //error for this
    return 5 // fine for it
}
let num2 = addition(5) //here type of num2 is number


//<--- Arrow function ------>
const getHello = (s: string) : string =>{ //must be return a value even a empty string
    return " str"
}


const heros = ["thor", "spiderman", "ironman"]

heros.map(hero =>{
    // return 2   also allowed 
    return `hero is ${hero}`
})

heros.map((index): string =>{
    return `hero is ${index}`
})



function consoleError(errormsg: string): void {
    console.log(errormsg)
    // return 1  // do not return any thing because of void
}

//never keyword---> never return any value 


function handleError(errmsg: string): never{
    throw new Error(errmsg)   //throwa an execption
}