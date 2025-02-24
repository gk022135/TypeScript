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


//like 2d array
const MLMOdels: number[][] = [
    [255, 255,255],
    [1, 2, 3, 45]
]
