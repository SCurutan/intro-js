// let myBalance = 0;
// myBalance = myBalance + 50;
// myBalance = myBalance + 100;
// myBalance = myBalance + 100;

// console.log(`Your balance is : ${myBalance}`);

// //EXERCISE 1: The Fortune Teller
// //Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

let jobTitle = `designer`;
let geoLocation = `Hawaii`;
let annualSalary = 100000;
let companyName = `Google`;

//old way of doing sum
// let future = `You will be a ` + jobTitle + ` in ` + geoLocation + `, making $` + annualSalary + ` for ` + companyName;
// console.log(future);

//dynamic way of doing sum

console.log(`You will be a ${jobTitle} in ${geoLocation}, making $${annualSalary} for ${companyName}`);

let eleExOne = document.querySelector(`#ex1`)
eleExOne.textContent = `You will be a ${jobTitle} in ${geoLocation}, making $${annualSalary} for ${companyName}`


// //EXERCISE 2: The Age Calculator
// //Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: `They are NN years old.`, substituting the values.

let birthYear = 1962;
let currentYear = 2020;

let age = currentYear - birthYear;

//old way of doing sum
// let persons_age = `They are ` + age + ` years old.`;
// console.log(persons_age);

//dynamic way of doing sum

console.log(`They are ${(currentYear-birthYear)} years old.`)

let eleExTwo = document.querySelector(`#ex2`)
eleExTwo.textContent = `They are ${(currentYear-birthYear)} years old.`

// //EXERCISE 3: The Lifetime Supply Calculator
// //Ever wonder how much a `lifetime supply` of your favorite snack is? Wonder no more! Store your current age into a letiable. Store a maximum age into a letiable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: `You will need NN to last you until the ripe old age of X`.

let myAge = 31;
let maxAge = 92;
let dailyAmt = 3;

//old way of doing sum
// let totalAge = (maxAge - myAge) * (3*7*52);
// let lifetime = `You will need ` + totalAge + ` Wagon Wheels to last you until the ripe old age of ` + maxAge + `.`;
// console.log(lifetime);

//dynamic way of doing sum

console.log(`You will need ${(maxAge-myAge)*(3*7*52)} Wagon Wheels to last to the ripe old age of ${maxAge}.`)

let eleExThree = document.querySelector(`#ex3`)
eleExThree.textContent = `You will need ${(maxAge-myAge)*(3*7*52)} Wagon Wheels to last to the ripe old age of ${maxAge}.`

// //EXERCISE 4: The Geometrizer
// //Calculate properties of a circle, using the definitions here. Store a radius into a letiable. Calculate the circumference based on the radius, and output `The circumference is NN`. Calculate the area based on the radius, and output `The area is NN`.

let radius = 10;

//old way of doing sum
// let circumference = radius * 2 * 3.14159;
// let area = (3.14159 * radius) * (3.14159 * radius);
// let circumference_size = `The circumference is ` + circumference;
// console.log(circumference_size);
// let areaSum = `The area is ` + area;
// console.log(areaSum);

//dynamic way of doing sum

console.log(`The circumference is ${radius*(3.14159*2)}cm.`)
console.log(`The area is ${3.14159*(radius**2)}cm squared.`)

let eleExFour = document.querySelector(`#ex4`)
eleExFour.textContent = `The circumference is ${radius*(3.14159*2)}cm and the area is ${3.14159*(radius**2)}cm squared.`

// //EXERCISE 5: The Temperature Converter
// //It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a letiable. Convert it to fahrenheit and output `NN°C is NN°F`.  Now store a fahrenheit temperature into a variable. Convert it to celsius and output `NN°F is NN°C.`

let celsius = 27;
let farenheit = 65;

//old way of doing sum
// let convertFahrenheit = (celsius * 1.8) + 32;
// let convertCelsius = (farenheit / 1.8) - 32;
// let celToFar = celsius + `°C is ` + (convertFahrenheit) + `°F`;
// console.log(celToFar);
// let farToCel = farenheit + `°F is ` + (convertCelsius) + `°C`;
// console.log(farToCel);

//dynamic way of doing sum
console.log(`27°C is ${(celsius * 1.8) + 32}°F`)
console.log(`65°F is ${(farenheit / 1.8) - 32}°C`)

let eleExFive = document.querySelector(`#ex5`)
eleExFive.textContent = `27°C is ${(celsius * 1.8) + 32}°F and 65°F is ${(farenheit / 1.8) - 32}°C`

//FUNCTIONS
// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(number) {
    let resultSix = number ** 2
    console.log(`The square of ${number} is ${number ** 2}`)
    return resultSix
}

let number = 4
let eleExSix = document.querySelector(`#ex6`)
eleExSix.textContent = `The square of ${number} is ${squareNumber(number)}`

// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(num) {
    let resultSeven = num/2
    console.log(`Half of ${num} is ${num/2}`);
    return resultSeven
}

let num = 88
let eleExSeven = document.querySelector(`#ex7`)
eleExSeven.textContent = `Half of ${num} is ${halfNumber(num)}`

// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(a, b) {
    let resultEight = a/b*100
    console.log(`${a} is ${a/b*100}% of ${b}`);
    return resultEight
}

let a = 4
let b = 8
let eleExEight = document.querySelector(`#ex8`)
eleExEight.textContent = `${a} is ${percentOf(a,b)}% of ${b}`

// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(rad) {
    let resultNine = Math.round((Math.PI * (rad ** 2))*100)/100
    console.log(`The area for a circle with radius ${rad} is ${Math.round((Math.PI * (rad ** 2))*100)/100}`)
    return resultNine
}

let rad = 8
let eleExNine = document.querySelector(`#ex9`)
eleExNine.textContent = `The area of a circle with radius ${rad} is ${areaOfCircle(rad)}`

// EXERCISE 5
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).

//ALL variables within ONE line of code
// function percentage(aNum) {
//     console.log(`The percentage that ${Math.PI*(((aNum/2)**2))**2} is of ${((aNum/2) ** 2)} result is ${((Math.PI*(((aNum/2)**2))**2)/((aNum/2) ** 2))*100}%.`)
// }
// percentage(1)

//logging INSIDE of function
function totalPerc(aNumber) {
    let half = aNumber/2
    let square = half ** 2
    let area = Math.PI * (square ** 2)
    let percentage = (area/square)*100
    console.log(`The percentage that the area is of the squared result is ${Math.round(percentage*100)/100}%`);
    return Math.round(percentage*100)/100
}

let eleExTen = document.querySelector(`#ex10`)
eleExTen.textContent = `The percentage that the area is of the squared result is ${totalPerc(1)}%`