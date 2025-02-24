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





