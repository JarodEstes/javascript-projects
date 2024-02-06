function reverse(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}

console.log(reverse("LaunchCode"));

// let reversedLettersArray = func(lettersArray) {
//   return lettersArray.split('').reverse().join('')
// }

// function removeI(arr) {
//   if (arr.indexOf('i') === -1){
//     return arr;
//   } else {
//     arr.splice(arr.indexOf('i'),1);
//     return removeI(arr);
//   }
// };

// let arr = ['One', 'i', 'c', 'X', 'i', 'i', 54];

// console.log(removeI(arr));