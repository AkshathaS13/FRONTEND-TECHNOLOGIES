
//console.log("1 open BookMyShow"); // 8sec

//console.log("2.Select Movie"); // 3sec

//console.log("3. Select seats"); //5sec

//console.log("4. Make Payment"); // 1sec

//console.log("5.Ticket booked"); //2sec



//setTimeOut function
//setTimeout(() => {
    //console.log("1. open BookMyShow");
//}, 8000);
//setTimeout(() => {
   // console.log("2. Select Movie");
//}, 3000);

//setTimeout(() => {
    //console.log("3. Select seats");
//}, 5000);

//setTimeout(() => {
    //console.log("4. Make Payment");
//}, 1000);

//setTimeout(() => {
 //   console.log("5. Ticket booked");
//}, 2000);

//callBacks
setTimeout(() => {
    console.log("1. open BookMyShow");
        setTimeout(() => {
            console.log("2. Select Movie");
                setTimeout(() => {
                    console.log("3. Select seats");
                        setTimeout(() => {
                            console.log("4. Make Payment");
                                setTimeout(() => {
                                    console.log("5. Ticket booked");
}, 2000);
                        }, 1000);
                }, 5000);
        }, 3000);
}, 8000);
