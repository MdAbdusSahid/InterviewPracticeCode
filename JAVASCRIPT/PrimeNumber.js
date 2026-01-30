function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Driver
console.log(isPrime(23)); // true

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}



function sieve(n) {
  const isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime;
}

// Example
const primes = sieve(50);
console.log(primes[23]); // true


function sieve(n) {
  const prime = new Array(n + 1).fill(true);
  prime[0] = prime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (prime[i]) {
      for (let j = i * i; j <= n; j += i) {
        prime[j] = false;
      }
    }
  }
  return prime;
}

console.log(sieve(30)[23]); // true


| Method     | Time           | Space | Interview Rating |
| ---------- | -------------- | ----- | ---------------- |
| sqrt loop  | O(√n)          | O(1)  | ⭐⭐⭐⭐             |
| i*i loop   | O(√n)          | O(1)  | ⭐⭐⭐⭐⭐            |
| Skip even  | O(√n)          | O(1)  | ⭐⭐⭐⭐⭐            |
| Recursive  | O(√n)          | O(√n) | ⚠️               |
| Functional | O(n)           | O(n)  | ❌                |
| Sieve      | O(n log log n) | O(n)  | ⭐⭐               |


  | Method     | Time           | Space | Verdict |
| ---------- | -------------- | ----- | ------- |
| √n loop    | O(√n)          | O(1)  | ⭐⭐⭐⭐⭐   |
| Skip evens | O(√n)          | O(1)  | ⭐⭐⭐⭐⭐   |
| Sieve      | O(n log log n) | O(n)  | ⭐⭐⭐⭐    |
| Functional | O(n)           | O(n)  | ⚠️      |
| Recursive  | O(√n)          | O(√n) | ⚠️      |
