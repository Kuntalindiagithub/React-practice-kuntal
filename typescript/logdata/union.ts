function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  printStatusCode(404);
  printStatusCode('404');

  function printStatusCode_V2(code: string | number) {
    //console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
   // Property 'toUpperCase' does not exist on type 'number'
  }

  function add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }
  
  console.log(add(10,10,10,10,10));
  
  let x: unknown = 'hello';

console.log((x as string).length);