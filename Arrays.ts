//<---- arrays in ts ------->

const superHeros: string[] = []   // number[], boolean[]
const heroPower: number[] = [] 
const power: Array<number> = []  // this also a syntax

superHeros.push("spiderman")
heroPower.push(2345)


type Userrr = {
     name: string;
     isActive: boolean;
}
const allUsers: Userrr[] = [];
allUsers.push({name: "", isActive: true});



//example of array of object with custom type
type User11 = {
    name: string;
    email: string;
    password: string;
  };
  
  const arrayOfObjects: User11[] = [
    { name: "Gaurav", email: "gk022135@gmail.com", password: "123456" },
    { name: "Saurav", email: "sk022135@gmail.com", password: "12345" },
    { name: "Sachin", email: "sachin022135@gmail.com", password: "12345" }
  ];

  console.log(arrayOfObjects);
  

//like 2d array
const MLMOdels: number[][] = [
    [255, 255,255],
    [1, 2, 3, 45]
]


//example for an function who return array of object
type User3 = {
    name: string;
    email: string;
    password: string;
  };
  
  // Function returning an array of User objects
  function getUsers(): User3[] {
    return [
      { name: "Gaurav", email: "gk022135@gmail.com", password: "123456" },
      { name: "Saurav", email: "sk022135@gmail.com", password: "12345" },
      { name: "Sachin", email: "sachin022135@gmail.com", password: "12345" }
    ];
  }
  
  console.log(getUsers()); // Call the function and print the result
  
