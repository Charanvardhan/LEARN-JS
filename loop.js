// do while

do {
    console.log("running");
    break
}while (true); // prints running


while (true) {
    console.log("hello")
    break
}


// FOR LOOP
const arr = [1, 2, 3, 4, 5, true];

for (let i=0; i < arr.length; i++) {
    console.log(arr[i])
}

for (let [i,value] of arr.entries()) {
    console.log(i, value)
}