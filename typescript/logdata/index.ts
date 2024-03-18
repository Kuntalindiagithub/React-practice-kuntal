const num1: number = 4
console.log(num1)

let first_name ="Kuntal"
console.log(first_name)


const json = JSON.parse("55")
console.log(typeof json)

let u: any= true;
u = "string"

// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);



