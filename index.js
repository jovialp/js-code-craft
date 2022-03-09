const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

const output = arr.reduce(
  (res, el) => {
    if (res[`${el}`]) {
      res[`${el}`] = res[`${el}`] + 1;
      if (res.resultCount < res[`${el}`]) {
        res.result = el;
        res.resultCount = res[`${el}`];
      }
    } else {
      res[`${el}`] = 1;
    }
    return res;
  },
  { result: '', resultCount: 0 }
);

console.log(output.result);

// function a() {
//     const myVar = 1;

//     return function() {
//        const myVar = 2;
//         console.log(myVar);

//         return function() {
//           const myVar = 3;
//           console.log(myVar);
//         }
//     }
// }
// const op1 = a()();
// console.log(2);
// op1();
// a()()();
