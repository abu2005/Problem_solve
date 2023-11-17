/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 */



function isPalindrome(s) {
    // Step 1: Convert to lowercase
    s = s.toLowerCase();

    // Step 2: Remove non-alphanumeric characters
    s = s.replace(/[^a-z0-9]/g, '');

    // Step 3: Check if it's a palindrome
    return s === s.split('').reverse().join('');
}

// Example usage:
const s1 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s1));  // Output: true

const s2 = "race a car";
console.log(isPalindrome(s2));  // Output: false

const s3 = " ";
console.log(isPalindrome(s3));  // Output: true
