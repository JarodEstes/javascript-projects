function reverse(str) {
   return str.split('').reverse().join('');
 }
 
 function isPalindrome(str) {
   return reverse(str) === str;
 }
 
 module.exports = isPalindrome;

 const isPalindrome= require('../palindrome.js');
 describe("testing isPalindrome", function() {
  
 });