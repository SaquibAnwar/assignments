/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Your code here
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/g, '');
  let strArr = str.split('');
  console.log(strArr);
  let i = 0;
  let j = strArr.length - 1;
  while(i < j){
    if(strArr[i] !== strArr[j]){
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(isPalindrome('Able, was I ere I saw Elba!'))

module.exports = isPalindrome;
