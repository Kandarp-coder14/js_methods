// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
console.log(Math.max(numbers));

// Find longest string in strings
let longestStr = (arr) => {
  let longest = '';
  for (var i =  0; i < arr.length; i++){
    if (arr[i].length > longest.length) {
        longest = arr[i];
    }
  }
    return longest;
}
console.log( longestStr(strings) );

// Find all the even numbers
console.log(numbers.map(function(numbers) { return (numbers % 2) === 0; }));


// Find all the odd numbers
console.log(numbers.map(function(numbers) { return (numbers % 1) === 0; }));


// Find all the words that contain 'is' use string method 'includes'
console.log(strings.includes('is'));

// Find all the words that contain 'is' use string method 'indexOf'
console.log(strings.indexOf('is'));

// Check if all the numbers in numbers array are divisible by three use array method (every)
function divide(num){
  if (num%3 == 0){
  console.log(num);
  }
  }
  numbers.every(divide)


//  Sort Array from smallest to largest
console.log(strings.sort());

// Remove the last word in strings
console.log(strings.pop());

// Remove the first word in the array
var newStrArr = strings.shift()
console.log(newStrArr)
// 
strings.shift()
console.log(strings)

// Place a new word at the start of the array use (upshift)
strings.unshift('abc')
console.log(strings)

// Make a subset of numbers array [18,9,7,11]
var a = numbers.splice(3,4)

// Make a subset of strings array ['a','collection']
var b = strings.splice(2,3)

// Replace 12 & 18 with 1221 and 1881
 numbers.splice(1,1,1221)
 numbers.splice(3,1,1881)

// Replace words with string in strings array
strings.splice(5,1,'string')

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" }, 
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
function names(customers){
  var nameArr = []
  for(let customer of customers){
    if(customer.firstname.charAt(0)==='J'){
      nameArr.push(customer)
    }
  }
  return nameArr
}


  names(customers)


// Create a new array with firstname and lastname
var newArr = customers.map( item =>`${item.firstname} ${item.lastname}` );

// Sort the array created above alphabetically

newArr.sort()