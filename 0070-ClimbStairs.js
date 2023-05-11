/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways 
can you climb to the top?

Constraints:

1 <= n <= 45
*/

let fibMap = new Map();
fibMap.set(0, 0);
fibMap.set(1, 1);
fibMap.set(2, 2);

function fibonacci(n) {
	if (fibMap.has(+n)) {
		return fibMap.get(+n);
	} else {
		const newFib = fibonacci(n - 1) + fibonacci(n - 2);
		// A constraint for this problem is n <= 45 so we will only cache values
		// in range [0, 45], but this function can still calculate possible
		// ascents for larger values.
		if (n <= 45) {
			fibMap.set(+n, newFib);
		}
		return newFib;
	}
}

function climbStairs(n) {
	if (n < 0) {
		console.error(
			`Illegal argument ${n} passed to climbStairs: no such thing as a staircase with negative steps.`
		);
	}
	return fibonacci(n);
}
