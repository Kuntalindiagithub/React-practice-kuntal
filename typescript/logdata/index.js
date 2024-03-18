var num1 = 4;
console.log(num1);
var first_name = "Kuntal";
console.log(first_name);
var json = JSON.parse("55");
console.log(typeof json);
var u = true;
u = "string";
// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);
