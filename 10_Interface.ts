//<----- interfae ----->

// start with keyword interface


interface User1 {  //more like class or lose form of class
    readonly dbid:number
    email: string,
    userId: number,
    googlId?: string,   //optional ?
    startTrail: () => string //return type of this method is strign
    // startTrail(): string // you can also use it

    getCoupon(coupon: string, value: number): number
}

const Gaurav: User1 = {dbid: 123456, email: "", userId: 12345,
    startTrail: () =>{
        return "trail started"
    }
    ,
    getCoupon: (name: "gaurav", off: 30) =>{
        return 10;
    }
}

Gaurav.email = "gk@com"
