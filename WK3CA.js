//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
console.log(ages[0] - ages[ages.length-1]);  //I tried for like an hour to do this... indexOf - lastIndexOf?

//b. Add a new age to your array and repeat the step above to ensure it is dynamic 
ages.push(33);
console.log(ages[0] - ages[ages.length-1]);

//c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let sum = 0;
for( let i = 0; i < ages.length; i++ ){
    sum += ages[i];
}
console.log(sum / ages.length);

//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let nameAve = 0;
for (let i = 0; i < names.length; i++){
    nameAve += names[i].length;
}
console.log(nameAve / names.length);

//b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let allNames = " " ;
for (let i = 0; i < names.length; i++){
    allNames += names[i] + " ";
}
console.log(allNames);

//3. How do you access the last element of any array? 
//   (you can use lastIndexOf or array.length -1)

//4. How do you access the first element of any array? 
//   (you can use indexOf or array[0])

//5. Create a new array called nameLengths. 
//Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = [];
for (let i=0; i < names.length; i++){
    nameLengths.push(names[i].length);
    }
console.log(nameLengths);

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let sumAll = 0;
for (let i=0; i < nameLengths.length; i++){
    sumAll += nameLengths[i];
    }
console.log(sumAll);

 //7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
 function xWord(word, n){
    let joinedWords = '';
    for (let i = 0; i < n; i++){
        joinedWords += word;
    }
console.log(joinedWords);
}
xWord("Chiefs", 3); 

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name.
function fullName(firstName, lastName){
    console.log(firstName + " " + lastName);
    }
fullName("Hank", "Stram");

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbers = [5, 13, 7, 40, 23, 19];
function addNumbers(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
 console.log(sum > 100);
}
addNumbers(numbers);

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function average(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum / numbers.length);
}
average(numbers);

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let numbers1 = [8, 3, 5, 7, 2, 6, 1];
let numbers2 = [2, 5, 9, 8, 3, 4, 2];
function aveReturn(numbers1, numbers2){
    let numberSum1 = 0;
    let numberSum2 = 0;
    let return1 = 0;
    let return2 = 0;
    for (let i = 0; i < numbers1.length; i++){
       numberSum1 += numbers1[i];
}
return1 = numberSum1 / numbers1.length;    
    for (let i = 0; i < numbers2.length; i++){
        numberSum2 += numbers2[i];
}
return2 = numberSum2 / numbers2.length;
console.log(return1 > return2);
}
aveReturn(numbers1, numbers2);

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true;
let moneyInPocket = 10.51;
function willBuyDrink(){
if (isHotOutside == true && moneyInPocket > 10.50){
        console.log(true);
    }
}
willBuyDrink();

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function showMessage(){
    let message = "I've spent waaay to long on this";
    alert(message);
}
showMessage();
// This function coveys the amount of time ive spent on the assignment.