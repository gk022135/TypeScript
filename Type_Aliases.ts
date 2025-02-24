//<------ type aliasess ------->
/* 
in type aliases we can define our custome object with some data type
*/
// one visited typescript website for type Aliasees


type User = {
    name : string;
    email : string;
    isActive : boolean;
}

// type Mystring = string; // it also is allowed

function createUser(user: User) : User{
    return {name: "", email: "", isActive: true}
}
createUser({name: "", email:"", isActive: true})

//example 
type Point = {
    x: number;
    y : number;
};

function printCordinate(pt: Point){
    console.log("the coordinate's x value is : ",pt.x);
    console.log("the coordinated y value is ", pt.y);
}
printCordinate({x:10, y:30});