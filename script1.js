// 1. Print numbers from 1 to 10

for(var i = 1; i <= 10; i++)
{
    console.log(i);
}

// 2. Print the odd numbers less than 100

for(var i = 1; i <= 100; i += 2)
{
    console.log(i);
}

// 3. Print the Multiplication table with 7

for(var i = 1; i <= 10; i++) {
    var row = "7 * " + i + "=" + 7 * i;
    console.log(row);
}

// 4. Print the multiplication tables with numbers from 1 to 10

for(var i = 1; i <= 10; i++)
{
    consoleTable(i);
    console.log("");
}

function consoleTable(n)
{
    for(var i = 1; i <= 10; i++)
    {
        var row = n + "*" + i + "=" + n * i;
        console.log(row);
    }
}

// 5. Calculate the  sum of numbers from 1 to 10
var sum = 0;
for(var i = 1; i <= 10; i++)
{
    sum += i;
}
console.log(sum);

// 6. Calculate 10! Reminder n! = 1*2*...*n
var prod = 1;
for(var i = 1; i <= 10; i++)
{
    prod *= i;
}
console.log(prod);

// 7. Calculate the sum of odd numbers greater than 10 and less or equal than 30

var sum = 0;
for(var i = 11; i <= 30; i += 2)
{
    sum += i;
}
console.log(sum);

// 8. Create a function that will convert from Celsius to Fahrenheit [Reminder: C = F - 32 / 1.8]
function celsiusToFahrenheit(n)
{
    return n * 1.8 + 32;
}
var r = celsiusToFahrenheit(20);
console.log(r);

// 9. Create a function that will convert  from Fahrenheit to Celsius [Reminder: C = F - 32 / 1.8]
function fahrenheitToCelsius(n)
{
    return (n - 32) / 1.8;
}
var r = fahrenheitToCelsius(68);
console.log(r);

// 10. Calculate the sum of numbers in an array of numbers. Example array : [2, 3, -1, 5, 7, 9, 10, 15, 95]
function sumArray(ar)
{
    var sum = 0;
    
    for(var i = 0; i < ar.length; i++)
    {
        sum += ar[i];
    }
    
    return sum;
}

var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var sum = sumArray(ar);
console.log(sum);

// 11. Calculate the average of the numbers in an array of numbers Example array: [1, 3, 9, 15, 90]
function averageArray(ar)
{
    var n = ar.length;
    var sum = 0;
    
    for(var i = 0; i < n; i++)
    {
        sum += ar[i];
    }
    
    return sum / n;
}

var ar = [1, 3, 9, 15, 90];
var avg = averageArray(ar);

console.log("Average: ", avg);

// 12a. Create a function that receives an array of numbers and returns an array containing only the positive numbers. Requirement: Use a “for” loop
function getPositives(ar)
{
    var ar2 = [];
    
    for(var i = 0; i < ar.length; i++)
    {
        var el = ar[i];
        
        if (el >= 0)
        {
            ar2.push(el);
        }
    }
    
    return ar2;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);

console.log(ar2);

// 12b. Create a function that recieves an array of numbers & returns an array containing only the positive numbers. 
function getPositives(ar)
{
    var ar2 = [];
    
    for(var el of ar)
    {
        if (el >= 0)
        {
            ar2.push(el);
        }
    }
    
    return ar2;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);

console.log(ar2);

// 12c. Create a function that recieves an array of numbers & returns an array containing only the positive numbers.
function getPositives(ar)
{
    return ar.filter(el => el >= 0);
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);

// 13. Find the maximum number in an array of numbers
function findMax(ar)
{
    var max = ar[0];
    
    for(var i = 0; i < ar.length; i++)
    {
        if (ar[i] > max)
        {
            max = ar[i];
        }
    }
    
    return max;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);

// 14. Print the first 10 Fibonacci numbers without using recursion. Reminder: F(0) = 0 F(1) = 1 F(n) = F(n-1) + F(n-2)
var f0 = 0;
console.log(f0);

var f1 = 1;
console.log(f1);

for(var i = 2; i < 10; i++)
{
    var fi = f1 + f0;
    console.log(fi);
    
    f0 = f1;
    f1 = fi;
}

// 15. Create a function that will find the nth Fibonacci number using recursion. Reminder: F(0) = 0 F(1) = 1 F(n) = F(n-1) + F(n-2)
function findFibonacci(n)
{
    if (n == 0)
        return 0;
        
    if (n == 1)
        return 1;
        
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}

var n = findFibonacci(10);
console.log(n);

//16. Create a function that will return a Boolean specifying if a number is prime
function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    var maxDiv = Math.sqrt(n);
    
    for(var i = 2; i <= maxDiv; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    
    return true;
}

console.log(2, " is prime? ", isPrime(2));
console.log(3, " is prime? ", isPrime(3));
console.log(4, " is prime? ", isPrime(4));
console.log(5, " is prime? ", isPrime(5));
console.log(9, " is prime? ", isPrime(9));

// 17. Calculate the sum of digits of a positive integer number
function sumDigits(n)
{
    var s = n.toString();
    var sum = 0;
    
    for(var char of s)
    {
        var digit = parseInt(char);
        sum += digit;
    }
    
    return sum;
}

var sum = sumDigits(1235231);
console.log("Sum: ", sum);

// 18. Print the first 100 prime numbers
consolePrimes(100);

// Function prints the first nPrimes numbers
function consolePrimes(nPrimes)
{
    var n = 0;
    var i = 2;
    
    while(n < nPrimes)
    {
        if (isPrime(i))
        {
            console.log(n, " --> ", i);
            n++;
        }
        
        i++;
    }
}


// Returns true if a number is prime
function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    var maxDiv = Math.sqrt(n);
    
    for(var i = 2; i <= maxDiv; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    
    return true;
}

//19. Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"
console.log(getPrimes(10, 100));

function getPrimes(nPrimes, startAt)
{
    var ar = [];
    
    var i = startAt;
    
    while(ar.length < nPrimes)
    {
        if (isPrime(i))
        {
            ar.push(i);
        }
        
        i++;
    }
    
    return ar;
}

// Returns true if a number is prime
function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    var maxDiv = Math.sqrt(n);
    
    for(var i = 2; i <= maxDiv; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    
    return true;
}

//20. Rotate an array to the left 1 position
var ar = [1, 2, 3];
rotateLeft(ar);
console.log(ar);

function rotateLeft(ar)
{
    var first = ar.shift();
    ar.push(first);
}

//21. Rotate an array to the right 1 position
var ar = [1, 2, 3];
rotateRight(ar);
console.log(ar);

function rotateRight(ar)
{
    var last = ar.pop();
    ar.unshift(last);
}

// 22. Reverse an array
var ar = [1, 2, 3];
var ar2 = reverseArray(ar);
console.log(ar2);

function reverseArray(ar)
{
    var ar2 = [];
    
    for(var i = ar.length - 1; i >= 0; i--)
    {
        ar2.push(ar[i]);
    }
    
    return ar2;
}

//23. Reverse a string
var s = reverseString("JavaScript");
console.log(s);

function reverseString(s)
{
    var s2 = "";
    
    for(var i = s.length - 1; i >= 0; i--)
    {
        var char = s[i];
        s2 += char;
    }
    
    return s2;
}

// 24. Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];

var ar = mergeArrays(ar1, ar2);
console.log(ar);

function mergeArrays(ar1, ar2)
{
    var ar = [];
    
    for(let el of ar1)
    {
        ar.push(el);
    }
    
    for(let el of ar2)
    {
        ar.push(el);
    }
    
    return ar;
}

// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [1, 4, 5, 6, 14];

var ar = mergeExclusive(ar1, ar2);
console.log(ar);

function mergeExclusive(ar1, ar2)
{
    var ar = [];
    
    for(let el of ar1)
    {
        if (!ar2.includes(el))
        {
            ar.push(el);
        }
    }
    
    for(let el of ar2)
    {
        if (!ar1.includes(el))
        {
            ar.push(el);
        }
    }
    
    return ar;
}

// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [-1, 4, 5, 6, 14];

var ar = mergeLeft(ar1, ar2);
console.log(ar);

function mergeLeft(ar1, ar2)
{
    var ar = [];
    
    for(let el of ar1)
    {
        if (!ar2.includes(el))
        {
            ar.push(el);
        }
    }

    return ar;
}

//27a. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
var ar = getDistinctElements([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]);
console.log(ar);

function getDistinctElements(ar)
{
    var ar2 = [];
    
    for(let i = 0; i < ar.length; i++)
    {
        if (!isInArray(ar[i], ar2))
        {
            ar2.push(ar[i]);
        }
    }
    
    return ar2;
}

function isInArray(n, ar)
{
    for(let i = 0; i < ar.length; i++)
    {
        if (ar[i] === n)
            return true;
    }
    
    return false;
}

//27b. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
var ar = getDistinctElements([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]);
console.log(ar);

function getDistinctElements(ar)
{
    var ar2 = [];
    
    var lastIndex = ar.length - 1;
    
    for(let i = 0; i <= lastIndex; i++)
    {
        if (!isInArray(ar[i], ar, i + 1, lastIndex))
        {
            ar2.push(ar[i]);
        }
    }
    
    return ar2;
}

function isInArray(n, ar, fromIndex, toIndex)
{
    for(var i = fromIndex; i <= toIndex; i++)
    {
        if (ar[i] === n)
            return true;
    }
    
    return false;
}

//28. Calculate the sum of first 100 prime numbers
var n = 10;
console.log("Sum of first ", n, " primes is ", sumPrimes(10));

function sumPrimes(n)
{
    var foundPrimes = 0;
    var i = 2;
    var sum = 0;
    
    while(foundPrimes < n)
    {
        if (isPrime(i))
        {
            foundPrimes++;
            sum += i;
        }
        
        i++;
    }
    
    return sum;
}

// Returns true if number n is prime
function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    var maxDiv = Math.sqrt(n);
    
    for(var i = 2; i <= maxDiv; i++)
    {
        if (n % i === 0)
        {
            return false;
        }
    }
    
    return true;
}

//29. Print the distance between the first 100 prime numbers
consoleDistances(100);

// Print distances between the first n prime numbers
function consoleDistances(n)
{
    var lastPrime = 2;
    var i = lastPrime + 1;
    var foundPrimes = 1;
    
    while(foundPrimes < n)
    {
        if (isPrime(i))
        {
            console.log(i - lastPrime, "\t", i, " - ", lastPrime);

            foundPrimes++;
            lastPrime = i;
        }
        
        i++;
    }
}

// Returns true if number n is prime
function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    var maxDiv = Math.sqrt(n);
    
    for(var i = 2; i <= maxDiv; i++)
    {
        if (n % i === 0)
        {
            return false;
        }
    }
    
    return true;
}

//30a. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
var n1 = "2909034221912398942349";
var n2 = "1290923909029309499";
var sum = add(n1, n2);

console.log(n1, "\n", n2, "\n", sum);

function add(sNumber1, sNumber2)
{
    var s = "";
    var carry = 0;
    
    var maxSize = Math.max(sNumber1.length, sNumber2.length);
    
    for(var i = 0; i < maxSize; i++)
    {
        var digit1 = digitFromRight(sNumber1, i);
        var digit2 = digitFromRight(sNumber2, i);
        
        var sum = digit1 + digit2 + carry;
        var digitSum = sum % 10;
        carry = sum >= 10 ? 1 : 0;
        
        s = digitSum.toString() + s;
    }
    
    if (carry > 0)
        s = carry + s;
    
    return s;
}

function digitFromRight(s, digitNo)
{
    if (digitNo >= s.length)
        return 0;
        
    var char = s[ s.length - 1 - digitNo ];
    return parseInt(char);
}

// 30b. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
var n1 = "2909034221912398942349";
var n2 = "1290923909029309499";
var sum = add(n1, n2);

console.log(n1);
console.log(n2);
console.log(sum);

function add(sNumber1, sNumber2)
{
    var maxSize = Math.max(sNumber1.length, sNumber2.length);
    
    var s1 = sNumber1.padStart(maxSize, "0");
    var s2 = sNumber2.padStart(maxSize, "0");

    var s = "";
    var carry = 0;
    
    for(var i = maxSize - 1; i >= 0; i--)
    {
        var digit1 = parseInt(s1[i]);
        var digit2 = parseInt(s2[i]);
        
        var sum = digit1 + digit2 + carry;
        var digitSum = sum % 10;
        carry = sum >= 10 ? 1 : 0;
        
        s = digitSum.toString() + s;
    }
    
    if (carry > 0)
        s = carry + s;
    
    return s;
}