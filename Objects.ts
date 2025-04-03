//<-----objects in TypeScript ------>

import { create } from "domain"

const User = {
    name : "Gaurav",
    email : "gk022135@gmail.com",
    isActive : true
}

function createUser({name: string, ispaid: boolean}){

}
createUser({name: "gaurav", ispaid : false})
// createUser({name: "guarav", ispaid:true, email: "gk@d.om"})  // gives error because email not define in args
// it donot give error for this

let newUser = {name: "Gaurav", ispaid: false, email:"gk@b.com"}
createUser(newUser) //IT WILL NOT GIVE ERROR 



//what happen when a fucntion return an object in typeScript

//function Cretaecourse(args): {return object ke data ko declare kre} {function body }
function Createcourse() :{name: string, price:number} {
    return {name:"ReactJs", price: 399}
}


//declareing object in typescript
// You can define an object using a custom type.
type User = {
    name: string;
    email: string;
    password: string;
  };
  
  const user: User = {
    name: "Gaurav",
    email: "gk022135@gmail.com",
    password: "123456",
  };
  
  console.log(user);
  

//Declaring an Object with an interface
interface UserInterface {
    name: string;
    email: string;
    password: string;
  }
  
  const userInter: UserInterface = {
    name: "Saurav",
    email: "sk022135@gmail.com",
    password: "abcdef",
  };
  
  console.log(user);
  

//   Use ? to make a property optional.
type User2 = {
    name: string;
    email: string;
    password?: string; // Optional
  };
  
  const user12: User2 = { name: "Sachin", email: "sachin022135@gmail.com" };  //beause of optional you write password or not it up to you

  const user2: User2 = { name: "Gaurav", email: "gk022135@gmail.com", password: "123456" };
  
  console.log(user1);
  console.log(user2);
  


//   Use readonly to prevent modification.
type User3 = {
    readonly id: number;
    name: string;
    email: string;
  };
  
  const user3: User3 = { id: 101, name: "Gaurav", email: "gk022135@gmail.com" };
  
  // user.id = 102; ❌ Error: Cannot assign to 'id' because it is a read-only property.
  


//   Object with Dynamic (Index) Properties
// Use [key: string]: type when you don’t know the exact keys in advance.
type User4 = {
    name : string;
    email : string;
    [key : string] : string;  // allow extra properites
};
const user4 : User4 = {
    name :  "Gaurav",
    email : "gk@gmail.com",
    phone  :"729597697" //valid due to index signature
};
console.log(user4);


//function inside an object
//you can define methods inside objects

type User5 = {
    name : string,
    email : string,
    greet : () => string;  //function type
    function2 : () => number // function with return tyoe is nmber
    // functionNormal : function  () : number   //we can uwe it
}
const user5 : User5 = {
    name : "Gaurav",
    email  : "gk022135!",
    greet : ()=> "hello ji",
    function2 : () => {
        // here yoou can write your function logic
        const x:number = 10;
        const y:number = 20
        return x*y;
    }
}