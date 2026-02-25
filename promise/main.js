const newpromise = new Promise((resolve, reject) => {
    const age = 25;
    if (age >= 18) {
        resolve("You are an adult.");
    } else {
        reject("You are a minor.");
    }
});

newpromise
    .then((message) => {
        console.log("Success: " + message);
    })
    .catch((error) => {
        console.log("Error: " + error);
    });