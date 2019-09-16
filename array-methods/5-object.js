// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)
function list(obj){
  for(let key in obj){
    console.log(key,obj[key])
  }
}



// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};

function remove(student){
  console.log(student)
  delete student.rollno
  console.log(student)
}




// 3. Write a function to get the length of an object.
function countKeys(obj){
  var counter = 0;
  for(let key in obj) {
    counter++;
    
  }
  return counter
}