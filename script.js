const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener("click", () => {
    const ip = parseInt(document.getElementById('ip').value); // Get the input value as an integer

    // Start the promise chain
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ip); // Initial resolve with the input number
        }, 2000);
    })
        .then((ip) => {
            output.innerHTML += `Result: ${ip} <br>`; // Append initial value
            return ip * 2; // Multiply by 2
        })
        .then((ip) => {
            output.innerHTML += `Result: ${ip} <br>`; // Append after multiplication
            return ip - 3; // Subtract 3
        })
        .then((ip) => {
            output.innerHTML += `Result: ${ip} <br>`; // Append after subtraction
            return ip / 2; // Divide by 2
        })
        .then((ip) => {
            output.innerHTML += `Result: ${ip} <br>`; // Append after division
            return ip + 10; // Add 10
        })
        .then((ip) => {
            output.innerHTML += `Final Result: ${ip} <br>`; // Append final result
        })
        .catch((error) => {
            output.innerHTML = `Error: ${error.message}`; // In case of an error
        });
});
