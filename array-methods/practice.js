//using map
var bdays = ['08-14', '10-04', '04-21']; 
var bdays2 = bdays.map(function(elem) { 
  return elem.replace('-', '/');
});





// Use below arrays to make questions for yourself and practice the methods like
// map
// forEach
// filter
// splics
// reduce
// etc ..

// Write atleast 10 different question for every method.

var pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];
//using map
var allPizzas = pizzas.map ( element => element + "00");
//using filter
var allPizzas = pizzas.filter ( element => element.length>9);
//using forEach
var allPizzas = pizzas.forEach ( element => element);

var cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];
//using map
var cuts = [  "Chuck","Brisket","Shank","Rib","Plate","Flank","Short Loin","Tenderloin","Sirloin","Round"];
      var cut = cuts.map(item => item + 'this are the various categories of cuts')
//using filter
var cut = cuts.filter ( element => element.length>2);
//using forEach
var cut = cuts.forEach ( element => element.length);

var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];
 //using each
 numbers.forEach(function(nums){
   console.log(element);
 });
 //using map
 var nums = numbers.map(element => element *2);
 //using filter
 var num = numbers.map(element => element % 2==0);


//for each
const items = [1, 29, 47];
const copy = [];

items.forEach(function(item){
  copy.push(item*item);
});


const items = [5, 19, 50];
const copy = [];

items.forEach(function(item){
  copy.push(item+item);
});
console.log(copy);

const fruits = ["banana"];
  const fruit1 = ['apple']
  const fruit2 = ['guava']
  const fru = [];

  fruits.forEach(function(fruit){
    fru.push(fruits, fruit1, fruit2);
  });
  console.log(fru);

var fruits = ['banana', 'apple', 'grapes', 'mango', 'papaya'];
  fruits.forEach(function(fruit){
    console.log(fruit)
  });


//filters  
var nums = [-4, 3, 2, -21, 1];
var pos = nums.filter(function(element) {
return element > 0;
});
console.log(pos)
//maps
var nums = [-4, 3, 2, -21, 1];
var pos = nums.map(function(element) {
  return element});
  console.log(pos)
//foreach
var nums = [-4, 3, 2, -21, 1];
var pos = nums.forEach(function(element) {
  return element});
  console.log(pos)

