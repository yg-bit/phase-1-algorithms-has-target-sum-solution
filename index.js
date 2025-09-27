function hasTargetSum(array, target) {
  // We'll use a Set to keep track of numbers we've seen so far
  const seenNumbers = new Set();

  // Loop through each number in the array
  for (const number of array) {
    // Find the "complement" number that would add up to the target
    const complement = target - number;

    // If we've already seen the complement, we found a pair!
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Otherwise, add the current number to the set and continue
    seenNumbers.add(number);
  }

  // If no pair adds up to target, return false
  return false;
}

/* 
  Big O Time Complexity:
  - Time: O(n) because we loop through the array once.
  - Space: O(n) because we may store up to n numbers in the Set.
*/

/* 
  Pseudocode:
  - Create an empty Set called seenNumbers
  - For each number in the array:
      - Compute complement = target - number
      - If complement is in seenNumbers, return true
      - Otherwise add number to seenNumbers
  - If loop ends without finding a pair, return false
*/

/*
  Explanation:
  The idea is to check if we've already seen the number that pairs
  with the current number to reach the target. 
  Example: If target = 10 and current number = 7, we need 3.
  If we've already seen 3, return true. If not, store 7 in the set.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
