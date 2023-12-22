/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //write a program to find if two string are anagrams or not
  if(str1.length !== str2.length){
    return false;
  }

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let str1Arr = str1.split('').sort().join('');
  let str2Arr = str2.split('').sort().join('');
  console.log(str1Arr);
  console.log(str2Arr);

  for(let i = 0; i < str1Arr.length; i++){
    if(str1Arr[i] !== str2Arr[i]){
      return false;
    }
  }

  return true;
}

var result = isAnagram('listen', 'silent');
console.log(result);

module.exports = isAnagram;
