//<---------enums in typescript ------>
//there are certain time where you you want to restrict some thing

// const AISLE = 0;
// const MIDDel = 1;
// const WINDOW = 2;  //not good practice

enum SeatChoice {
    AISLE = 10, //default its value is 0 
    MIDDLE,
    WINDOW,
}

const hcSeat = SeatChoice.AISLE

//enums me second item ki valuse uske just pahle wale se hoti hai, let if first value number type then second value is automatilly number 
//it will break by manually given another type of value