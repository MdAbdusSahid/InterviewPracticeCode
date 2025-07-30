function greet(greeting, age, country) {
  console.log(`${greeting}, I'm ${this.name}, age ${age}, from ${country}`);
}
const person = { name: 'Superman' };

greet.call(person, 'Hello', 27, 'India');
greet.apply(person, ['Hello', 27, 'India']);
const greetSuperman=greet.bind(person, 'Hello', 27, 'India');
greetSuperman()

