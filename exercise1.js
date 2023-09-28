let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, true, null];
function checkingNumbers() {
let even = 0
let odd = 0
let zero = 0
arr.forEach ((item) => {
   if (typeof item === 'number' && !isNaN(item)) {
      if (item ===0) {
         zero += 1
      } else if (item % 2 === 0) {
          even += 1
      } else {
          odd += 1
      }
   }
})
 console.log(`Количество четных чисел:${even}`)
 console.log(`Количество нечетных чисел:${odd}`)
 console.log(`Количество нулей:${zero}`)
}

checkingNumbers();