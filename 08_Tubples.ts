//<---- tuples ----->
//use for maintaining the orders fof enter data type

const user1: (string | number )[] = ["hc", 1]  // [1, "hc"] both are well

// but we have reuired ["hc", 1] or [1, "hc"] not both at same


//tupple make sure that even not inside but order of array matters
let user2: [string, number, boolean]
user2 = ["hc", 123,true]
// user2 = [123, "hc", false] // order is not same so error occurs