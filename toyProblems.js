//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: function (str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

   removeDups: function (array) {
     array.sort()
     for (var i = array.length; i>= 0; i--){
       if (array[i] === array[i-1]) {
         array.splice(i, 1)
       }
     }
     return array;
   },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

   titleIt: function (str) {
     var word = str.split("")
     var newStr = []
     newStr.push(word[0].toUpperCase())
     for (var i = 1; i < word.length; i++) {
       if( word[i - 1] == " "){
         newStr.push(word[i].toUpperCase())
       }else {
         newStr.push(word[i])
       }

     }
     return newStr.join("");
   },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

   vowelCounter: function(str){
     var arr = str.split("")
     var count = 0;
     for (var i = 0; i < arr.length; i++) {
       if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u'){
         count += 1
       }
     }
     return count;
   },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

   isPrime: function (value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
},

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20'
  //uncomment the foo property and give your answer as its value

  foo: "1020",

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

   log1: 'Hello World',
   log2: undefined
}
