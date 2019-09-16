var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year

// your code goes here
function calculateAge(data){
  var age = data.reduce((acc,cv)=>{
    return acc+=cv.age*7
  },0)
  return age
}


// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
// 2. map - to multiply human year to dog year
// 3. reduce - to accumulate total age.

// Solution 105
function sumDogYears(array){
  var filterDog = array.filter(element => element.type == "dog")
  console.log(filterDog)
  var mapDog = filterDog.map(element => element.age * 7)
  console.log(mapDog)
  return mapDog.reduce((acc , cv) => {acc += cv ; return acc},0) 
}