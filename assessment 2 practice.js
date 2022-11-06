// Assessment 2 Practice
// Date: Monday, Nov 7, 2022



// 1. Write a function
// that takes in a grocery item object
// and returns a string representing the price per item for that object.

let apple = {};
apple.price = "2"
apple.quantity = "1"

apple.buy = function () {
    alert("Total cost is $" + (apple.price * apple.quantity));
}

apple.buy();


// 2. Write a function that takes in two string arguments:
// the first being the string assessed,
// and the second being a single letter.
// The function should return a count of the occurrences of the letter (second argument) within the string (first argument).
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


const produce = [
    {
        name: "apple",
        weightinG: 86,
        expiration: "August 6"
    }, {
        name: "banana",
        weightinG: 75,
        expiration: "July 10"
    }, {
        name: "cantaloupe",
        weightinG: 100,
        expiration: "May 3"
    }, {
        name: "dragonfruit",
        weightinG: 120,
        expiration: "September 21"
    }, {
        name: "kiwi",
        weightinG: 85,
        expiration: "January 14"
    }
];

function getHeaviestProduce(arr) {
    let heaviest = {weightinG: 0};
    arr.forEach(function (el) { //creating a loop. will use forEach for this (for looping through an array)
        if (el.weightinG > heaviest.weightinG) {
            heaviest = el;
        }
    })
    return heaviest;
}

console.log(getHeaviestProduce(produce));



// 4. Write a function
// that takes in an array of numbers
// and returns an array of numbers from the original array
// that were evenly divisible by 13.
// If a number is not evenly divisible by 13, it should not be returned.
// If no elements within the array are evenly divisible by 13, the function should return an empty array.






// 5. Write a function that takes in a string and returns an object with the following properties:
//     1. string which is to be set the to the argument passed into the function.
//     2. numberOfWords which is to be set to the number of words within the string.
//     3. instancesOfE which to be set to the number of instances of the letter "E" within
//     the argument passed into the function. The count should refelect instances of both
//     uppercase and lowercase "E" (HINT: a previous function maybe useful in achieving
//     this).





















// Javier C.'s answer for #5 below - he used a forEach loop:

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



//Study hall with Cody: loops,araays, and objects
// Be able to work through assessment or the retake
// *There will be more than 2 questions that have to do with arrays:
// -manipulating arrays
//     -using slice and join method (or split and join)
//     -adding stuff to beginning of array
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
// -we prob won't need while or do while


