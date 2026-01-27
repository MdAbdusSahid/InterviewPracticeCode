const curriedAdd = a => b => c => a + b + c;
console.log(curriedAdd(1)(2)(3)); 

const add = a => b => a + b;
const addFive = add(5);
console.log(addFive(10));

const greet = salutation => name => `${salutation}, ${name}!`;
const sayHello = greet('Hello');
console.log(sayHello('Alice'));
