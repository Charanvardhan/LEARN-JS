// operations on different arithmetic types

const x = 6
const y = 'hello'

console.log(y / x) // "67" (string concatenation)

// string > number > boolean > object > null > undefined
// type coercion happens in JavaScript, meaning that when you perform operations on different types, 
// JavaScript will try to convert them to a common type.

// type  conversion

const w = '234'

console.log(Number(w) + x) // 239 (string to number conversion)
const a = "234chys4"
console.log(parseInt(a) + x, a)