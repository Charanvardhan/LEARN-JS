const arr = [1, 2, 3, 4, 5, true];
const arr2 = new Array(5)
console.log(arr2[2])

const arr3 = Array.from("hwllo")
console.log(arr3)

arr2[0] = 'y'
console.log(arr3[arr3.length]) // no out of index error prints undefined


arr2[arr2.length + 5] = 'y'
console.log(arr2) // no out of index error prints undefined


arr2.push(4)
arr2.pop()
console.log(arr2) // prints [ <5 empty items>, 4 ]

const array = Array.from("hello")
array.shift()
console.log(array) // prints [ 'e', 'l', 'l', 'o' ]
array.unshift('new')
console.log(array) // prints [ 'new', 'e', 'l', 'l', 'o' ]


console.log(array.indexOf('l')); // prints 1
console.log(array.lastIndexOf('l')); // prints 2
console.log(array.includes('l'))


const arr4 = arr.concat(array)
console.log(arr4) // prints [ 1, 2, 3, 4

const arrs = arr.join("|")
console.log(arrs) // prints "1|2|3|4|5|true"

// Slicing

const sliced = arr.slice(1, 3)
console.log(sliced) // prints [ 2, 3 ]

const spliced = arr.splice(1,2)
console.log(spliced) // prints [ 2, 3 ]
console.log(arr) // prints [ 1, 4, 5, true ]


// Destructuring
const x = [1,2, 4, 5, 6]
const y = x // reference copy
const z = [...x] // shallow copy
z.push("hello")
console.log(x, y, z); // prints 1 2