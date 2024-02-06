function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }
<<<<<<< HEAD
console.log(makeLine(5));

// function makeSquare(size, size) {
//     let square = '';
//     for (let i = 0; i < size; i++); {
//         square += (makeLine(size, size) + '\n');
//     }
//     return square
// }
// console.log(makeSquare(5, 5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
  }
console.log(makeRectangle(5, 3));

=======
  console.log(makeLine(5));

  function makeSquare(size) {
    let line = '';
    for (let i = 0; i < size; i++); {
        line += makeLine(size)+ '\n'
    }
    return line;
  }
  console.log(makeSquare(5));

//   function makeRectangle(width, height) {
//     let rectangle = '';
//     for (let i = 0; i < height; i++) {
//       rectangle += (+ makeLine(width) + '\n');
//     }
//     return rectangle.slice(0, -1);
//   }
//   console.log(makeRectangle(5, 3));
>>>>>>> 617803cfda76e1f50e2160ad7dbef10bdcc5a763
