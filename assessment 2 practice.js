// Q's to ask Cody/David:
//
// what is a branch on github
// what is github
// point of pull requests on github


// 1. Write a function that takes in a grocery item object and returns a string representing the price per item for that object.

let apple = {};
apple.price = "2"
apple.quantity = "1"

apple.buy = function () {
    alert("Total cost is $" + (apple.price * apple.quantity));
}

apple.buy();


// 2. Write a function that takes in two string arguments:
//
// the first being the string assessed,
//
// and the second being a single letter.
//
// The function should return a count of the occurrences of the letter (second argument) within the string (first argument).
//
// This function should count both upper and lowercase instances of the letter.


function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++)
    {
        if (str.charAt(position) == letter)
        {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

console.log(char_count('w3resource.com', 'o'));

// https://www.w3resource.com/javascript-exercises/javascript-function-exercise-22.php


// 3. Write a function
// that takes in an array of grocery item objects
// and returns the object with the highest weightInGrams property.


let heaviestWeight = [
    {
        item: "apple",
        weightInG: 86,
        cost: ".50"
}, {
        item: "banana",
        weightInG: 79,
        cost: ".75"
    }, {
        item: "orange",
        weightInG: 96,
        cost: ".65"
    }, {
        item: "peach",
        weightInG: 90,
        cost: "1.0"
    }, {
        item: "melon",
        weightInG: 186,
        cost: "1.5"
    }
];

getheaviestProduce (heaviestWeight); // should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"};


//Warmup 10/21/22
// Write a function that when passed an array will return the longest string from the array.
//     Ex. const arr = [“Green”, “Blue”, “Periwinkle”];
// getLongestString(arr) // Returns “Periwinkle”

//David's solution: study this bc there will be something similar on assessment. this is a "bucket" problem.

function getlongestString(arr) {
    let longestStr = "";
    for (let str of arr) {
        if (str.length > longestStr.length) {
            longestStr = str;
        }
    }
    return longestStr;
}

const colors = ["Pink", "Lavender", "Ecru"];
console.log(getlongestString(colors));


//Warmup 10/26/22
// Write a function that takes in an array of objects and returns the object with the largest height property.

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    }, {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    }, {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    }, {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    }, {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

getTallestHamster(hamsters); // should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"};
//My answer (returns undefined):
//     function  getTallestHamster (arr) {
//         return Math.max(heightInMM);
//     }

//will end up with object with highest height property. similar to the get longest string (above). David's answer:




// 4. Write a function that takes in an array of numbers and returns an array of numbers from the original array that were evenly divisible by 13. If a number is not evenly divisible by 13, it should not be returned. If no elements within the array are evenly divisible by 13, the function should return an empty array.






// 5. Write a function that takes in a string and returns an object with the following properties:
//     1. string which is to be set the to the argument passed into the function.
//     2. numberOfWords which is to be set to the number of words within the string.
//     3. instancesOfE which to be set to the number of instances of the letter "E" within
//     the argument passed into the function. The count should refelect instances of both
//     uppercase and lowercase "E" (HINT: a previous function maybe useful in achieving
//     this).





















// 5. Write a function that takes in a string and returns an object with the following properties:
//     1. string which is to be set the to the argument passed into the function.
//     2. numberOfWords which is to be set to the number of words within the string.
//     3. instancesOfE which to be set to the number of instances of the letter "E" within
//     the argument passed into the function. The count should refelect instances of both
//     uppercase and lowercase "E" (HINT: a previous function maybe useful in achieving
//     this).

function countOccurancesOfLetter(stringOne, letter){
    let stringArr = stringOne.toLowerCase().split(``);
    console.log(stringArr);
    let count = 0;
    stringArr.forEach(function(index){
        if (index === letter){
            count += 1;
        }
    })
    console.log(count);
    return count;
}
countOccurancesOfLetter(`Gengar`, `g`);


javier cataneda example above. he used a foreach loop



//Study hall with Cody: loops,araays, and objects
// Be able to work through assessment or the retake
// *More than 2 questions that have to do with arrays:
// -manipulating arrays
//     -using slice and join method (or split and join)
//     -adding stuff to beginning of array
//
// -we prob wont need while or do while
//
// -know how to do a for loop and for each loop
//
// -well use split, slice, join alltogether
// -iterating through an array adn doing something within each array
// assessment uses objects for some things but no complicated object or array of objects
// -arrays are more prevalent than objects
// -know how to build an object within a function.
//
// -3 q's that are basically from last assessment

