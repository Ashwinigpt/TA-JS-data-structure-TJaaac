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

// 4. Find the highest number in the array and print it to the console using console.log()

let highest = numbers[0];
for(let i = 0; i < numbers.length; i ++){
    if(highest < numbers[i]){
        highest = numbers[i];
    }
}

// 5. Find the lowest number in the array and print it to the console using console.log()

let lowest = numbers[0];
for(let i = 0; i < numbers.length; i ++){
    if(lowest > numbers[i]){
        lowest = numbers[i];
    }
}

// 6. Find the even numbers in the array and print them to the console using console.log()

let even = [numbers];
for(let number of numbers) {
    if(number % 2 === 0) {
        even.push(number);
    }
}
console.log(even);

// 7. Find the odd numbers in the array and print them to the console using console.log()

let odd = [numbers];
for(let number of numbers) {
    if(number % 2 !== 0) {
        odd.push(number);
    }
}
console.log(odd);

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

let divisible = [numbers];
for(let number of numbers) {
    if(number % 5 === 0) {
        divisible.push(number);
    }
}
console.log(divisible);

// 9. Log all the element of the array one by one

console.log(sum);
console.log(average);
console.log(even);
console.log(odd);
console.log(divisible);
console.log(divisible_3);

// 10. Find all the number in the array that is divisible by 3

let divisible_3 = [numbers];
for(let number of numbers) {
    if(number % 3 === 0) {
        divisible_3.push(number);
    }
}
console.log(divisible_3);