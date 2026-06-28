function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function Bookticket() {
    await wait(8000);
    console.log("1. Open BookMyShow");
    await wait(3000);
    console.log("2. Search Movie");
    await wait(5000);
    console.log("3. Select seats");
    await wait(1000);
    console.log("4. Make payment");
    await wait(2000);
    console.log("5. Ticket Booked");
}

Bookticket();