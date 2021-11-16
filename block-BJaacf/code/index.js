// 1. Create an array named numbers and store 5 number values in it

let numbers = [2, 5, 8, 19, 33];

// 2. Calculate the sum of array items and print it to the console using console.log()

let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

// 3. Calculate the average of array items and print it to the console using console.log()

let average = 0; 
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    average = sum / numbers.length;
}
console.log(average);

// 2nd method

console.log(sum / numbers.length);

// 4. Find the highest number in the array and print it to the console using console.log()

let highest = numbers[0];
for(let number of numbers){
    if(highest < number){
        highest = number;
    }
}
console.log(highest);

// 5. Find the lowest number in the array and print it to the console using console.log()

let lowest = numbers[0];
for(let number of numbers){
    if(lowest > number){
        lowest = number;
    }
}
console.log(lowest);

// 6. Find the even numbers in the array and print them to the console using console.log()

for(let number of numbers) {
    if(number % 2 === 0) {
        console.log(number);
    }
}

// 7. Find the odd numbers in the array and print them to the console using console.log()

for(let number of numbers) {
    if(number % 2 !== 0) {
        console.log(number);
    }
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

for(let number of numbers) {
    if(number % 5 === 0) {
        console.log(number);
    }
}
// 9. Log all the element of the array one by one

for(let number of numbers) {
    console.log(number)
}

// 10. Find all the number in the array that is divisible by 3

for(let number of numbers) {
    if(number % 3 === 0) {
        console.log(number);
    }
}