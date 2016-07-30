// Example 1
function add(a, b) {
  return a + b;
};
console.log(add(3,1));

// Example 2
var toAdd = [9, 5];
console.log(add(...toAdd));

// Example 3
var groupA = ['Charly', 'Ferdinand'];
var groupB = ['Viktor'];
var finalGroup = [...groupA, ...groupB];
console.log(finalGroup);

// Example 4
var person = ['Enrique', 21];
var personTwo = ['Sebastian', 17];
var greet = function(name, age) {
  var msg = `Hi ${name}, you are ${age} years old!`;
  console.log(msg);
};
greet(...person);
greet(...personTwo);

// Example 5
var names = ['David', 'Ivan'];
var finalNames = [...names, 'Henry'];
finalNames.forEach((name) => {
  console.log('Hi, ' + name + '!');
});
