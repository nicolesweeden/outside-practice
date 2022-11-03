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