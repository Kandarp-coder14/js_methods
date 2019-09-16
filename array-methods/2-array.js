var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'abcfgdhdj',
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(words){
  var temp = "";
  
  for(let word of words){
    if(word.length>temp.length){
      temp=word
    }
  }
    return temp
}




var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
function sumArray(numbers1)
{
  var sum = numbers1.reduce((acc,cv)=>{
    return acc+=cv
  },0)
  return sum/numbers1.length
}





var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
function averageNumbers(num){
  var sum = numbers2.reduce((acc,cv) =>{
    return acc+=cv/numbers2.length
  },0)
  return sum
}




var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.



