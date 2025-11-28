
function displayMessage(name) {
    console.log(`Hello, ${name}!`);
}


function getUserInput() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const username = "Alice";
            resolve(username);   
        }, 1000);
    });
}
getUserInput().then((name) => {
    displayMessage(name);
});
