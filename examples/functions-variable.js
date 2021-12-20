//  "normale" Funktion
function greeting1(name) {
  return "Hi, my name is " + name;
}

//  Funktion in Variable speichern
const greeting2 = function (name) {
  return "Hi, my name is " + name;
};

//  Funktion in Variable speichern; als Arrow-Function
const greeting3 = (name) => "Hi, my name is " + name;

console.log(greeting1("Alex"));
console.log(greeting2("Alex"));
console.log(greeting3("Alex"));
