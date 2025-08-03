// var vs let vs const

// if (true) {
//     console.log(x) // ReferenceError: x is not defined
//     let x =3
// }
// console.log(x) // ReferenceError: x is not defined


if (true) {
    var x =3
}
console.log(x) // ReferenceError: x is not defined


function test() {
    console.log(x)
    let x = "test"
    console.log(x)
}

test()

// let and const are block scoped, meaning they are only accessible within the block they are defined in.
// var is function scoped, meaning it is accessible throughout the function it is defined in.