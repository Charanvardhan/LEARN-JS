/*

==
===
!=
!==
>
<
>=
<=

*/

// performs a comparison between two values by type coresion
console.log(1 == '1'); // true
console.log(undefined == null); // true
console.log(undefined == true); // false
console.log("" == undefined); // true
console.log("1,2" == [1,2])


console.log(1 === '1'); // false
console.log(undefined === null); // false
console.log(undefined === true); // false

// LOGICAL OPERATORS
console.log(true && true); // true
console.log(true || false)
console.log(!true)

console.log(true && "hello"); // true if true display "hello"
console.log(Boolean("hello") && "hello"); // false if false display "hello"

if (!true)
    console.log("This is true");
else if (false) 
    console.log("This is false");
else
    console.log("This is neither true nor false");

    console.log(1 < 2 < 3); // true


const cond = 2 < 3 ?    "2 is less than 3" : "no"
console.log(cond)

// SWITCH STATEMENTS
const value = 2;
switch (value) {
    case 2:
        console.log("one");
    case 3:
        console.log("two");
    default:
        console.log("default");
}

