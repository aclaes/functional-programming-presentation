//  Erstes Argument ist eine Funktion
const greeting = (helloFunction, name) => {
  return helloFunction() + ", my name is " + name;
};

const sayHi = () => {
  return "Hi";
};

const sayHello = () => {
  return "Hello";
};

console.log(greeting(sayHi, "Alex"));
console.log(greeting(sayHello, "Sarah"));
