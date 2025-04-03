//get aware from situtation


// all type in typescript are in lowercase
//syntax


// let variablename : type = valueofvariable;
let greetings: string = "Gaurav Kumar"

// greetings = 6 gives error :- that is safty provided by typescript
console.log(greetings);

let mynum = 6
// mynum.toUppercase()  error uppercase doesnot exist for number

//<----- integer and float ---->
//in javascript inte float are simple number

//number

let userid: number = 334466   // also 23434.0994 accepts
//userid.toFixed()  --->types inference


//boolean
let loggedin: boolean = false;


//type inference


//<-------- Any keyWord ----->
//u have no idea what value in a variable

//in such sitituation where typescript can not find the which type of value inside the variable later in future then marked as ANY
let hero;

function getHero(){
    return "thor"
}
hero = getHero();  // hero  infered by  Any keyword
// Any is just a mark says hey just off the type cheking for this var

