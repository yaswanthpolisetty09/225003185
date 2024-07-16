const express = require('express');

const app = express();
app.use(express.json());

const initializeApp = async () => {
    try {
        app.listen(9876, () => {
            console.log("Server is running on port 9876");
        });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

initializeApp();

app.post('/numbers/e', async (request, response) => {
    const { numbers } = request.body;
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    response.send({
        "numbers": evenNumbers
    });
});

app.post('/numbers/primes', async (request, response) => {
    const { numbers } = request.body;
    let primes = [];
    numbers.forEach(num => {
        if (isPrime(num)) {
            primes.push(num);
        }
    });
    response.send({
        "numbers": primes
    });
});

const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
};

const fibonacci = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 0;
    if (n === 2) return 1;

    let a = 0, b = 1, sum = a + b;
    for (let i = 2; i < n; i++) {
        let next = a + b;
        sum = sum + next;
        a = b;
        b = next;
    }
    return sum;
};

app.post('/numbers/fibo', async (request, response) => {
    const { numbers } = request.body;
    let fibNumbers = [];
    numbers.forEach(num => {
        fibNumbers.push(fibonacci(num));
    });
    response.send({
        "numbers": fibNumbers
    });
});

app.post('/numbers/rand', async (request, response) => {
    const { numbers } = request.body;
    let randNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        let b = Math.floor(Math.random() * numbers.length);
        let c = numbers[i] + numbers[b];
        randNumbers.push(c);
    }
    response.send({
        "numbers": randNumbers
    });
});

module.exports = app;
