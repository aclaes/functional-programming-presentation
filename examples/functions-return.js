// Rückgabewert (return) ist eine Funktion
const greeting = (greet) => {
  return (name) => {
    return greet + ", my name is " + name;
  };
};

const greetingHi = greeting("Hi");
const greetingHello = greeting("Hello");

console.log(greetingHi("Alex"));
console.log(greetingHello("Sarah"));
console.log(greeting("Hey ho")("Tim"));
