/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

You are given an array prices where prices[i] is the price of a given stock
on the ith day.

You want to maximize your profit by choosing a single day to buy one stock
and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot
achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

function maxProfit(prices) {
	// If prices is short enough, quick O(1) solution
	if (prices.length <= 1) return 0;

	// First pass, O(N), if the smallest number is before the largest number,
	// easy max profit
	let smallestIndex = 0;
	let smallest = prices[smallestIndex];
	let largestIndex = 0;
	let largest = prices[largestIndex];
	for (let i = 1; i < prices.length; i++) {
		// If current value is smaller, track it as the new smallest
		if (prices[i] < smallest) {
			smallest = prices[i];
			smallestIndex = i;
		}
		// If current value is larger, track it as the new largest
		if (prices[i] > largest) {
			largest = prices[i];
			largestIndex = i;
		}
	}
	if (largestIndex > smallestIndex) return largest - smallest;

	// If the largest value is not after the smallest, we have more work to do
	// Track the present (index of purchase) against the future (index of sale)
	// If that buy/sell combination is a profit, check it against the currently
	// stored largestProfit and update that value if it's greater.
	let presentIndex = 0;
	let futureIndex = 1;
	let largestProfit = 0;
	while (futureIndex < prices.length) {
		if (prices[presentIndex] < prices[futureIndex]) {
			const presentPrice = prices[presentIndex];
			const futurePrice = prices[futureIndex];
			if (futurePrice - presentPrice > largestProfit)
				largestProfit = futurePrice - presentPrice;
		}
		// If the present price is greater than the future price then we have 
		// already found the max profit for this range, move the presentIndex
		// to match the futureIndex.
		else {
			presentIndex = futureIndex;
		}
		futureIndex++;
	}
	return largestProfit;
}

const input = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(input));
