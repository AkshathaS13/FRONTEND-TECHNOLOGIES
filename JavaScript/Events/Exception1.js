let age = 12;
try {
    if(age < 18) {
        throw new Error("Age should be greater than 18, not eligible");
    }
}
catch(e) {
    console.log(e.messgae)
}
finally {
    console.log("Thank you!");
}