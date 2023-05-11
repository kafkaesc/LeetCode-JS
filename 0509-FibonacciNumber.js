/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the 
Fibonacci sequence, such that each number is the sum of the two preceding 
ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Constraints:

0 <= n <= 30
*/

// Create a cache of Fibonacci values and seed it with the values for 0, 1, 2
let fibMap = new Map();
fibMap.set(0, 0);
fibMap.set(1, 1);
fibMap.set(2, 1);

function fib(n) {
	n = +n;
	if (n < 0) {
		console.error(
			`Illegal argument ${n} passed to fib: no Fibonacci values below zero`
		);
	}
	if (fibMap.has(n)) {
		return fibMap.get(n);
	} else {
		const newFib = fib(n - 1) + fib(n - 2);
		// A constraint for this problem is 0 <= n <= 45 so we will only cache
		// values in range [0, 30], but this function can still calculate Fibonacci
		// values above 30.
		if (n <= 30) {
			fibMap.set(n, newFib);
		}
		return newFib;
	}
}
