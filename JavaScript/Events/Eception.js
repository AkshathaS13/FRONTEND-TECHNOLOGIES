console.log("Program started");
try {
    let a = 0/10; //exception
    console.log(a);
}
catch(error) {
    console.log("Error occured and handled", error.message);
}
finally {
    console.log("Program ended");
}