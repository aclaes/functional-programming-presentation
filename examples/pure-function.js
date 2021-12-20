// nicht pure
const myName = "Alex";
function greeting() {
  console.log("Hi, my name is " + myName);
}
greeting();

// pure
function greeting2(myName) {
  return "Hi, my name is " + myName;
}
console.log(greeting2("Alex"));
