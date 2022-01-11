// Iteration 1: Names and Input

console.log("I'm ready!");

// 1.1 Create a variable `hacker1` with the driver's name.

// 1.2 Print `"The driver's name is XXXX"`.

let hacker1 = "Leonardo";
console.log(`The driver's name is ${hacker1} `);

// 1.3 Create a variable `hacker2` with the navigator's name.

// 1.4 Print `"The navigator's name is YYYY"`.

let hacker2 = "Chrome";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

// 2.1. Depending on which name is longer, print:

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}; 

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let upperHacker1 = "";
for (let contador = 0; contador < hacker1.length; contador++) {
    upperHacker1 += hacker1[contador].toUpperCase() + " ";
}
console.log(upperHacker1)

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let reverseHacker2 = hacker2.split('').reverse().join('');
console.log(reverseHacker2);

// 3.3 Depending on the lexicographic order of the strings, print:

let compare = hacker1.localeCompare(hacker2);

switch(compare) {
    case -1:
        console.log("The driver's name goes first.");
        break;
    case 0:
        console.log("Yo, the navigator goes first definitely.");
        break;
    case 1:
        console.log("What?! You both have the same name?");
        break;
}

// Bonus 1

// Generate 3 paragraphs. Store the text in a variable type of string.

console.log(compare);

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius diam id est euismod, quis vestibulum sapien feugiat. Nullam auctor sagittis orci, eget cursus mi facilisis nec. Ut varius neque enim, in maximus turpis gravida sit amet. Nulla sed lectus nec lorem gravida gravida. Quisque vel nibh in sapien posuere laoreet. Aliquam facilisis lobortis justo vitae euismod. Sed vehicula, ipsum tristique interdum suscipit, dolor mi sollicitudin mauris, nec condimentum elit neque eget dolor. In nec metus ut nulla luctus interdum vel nec diam. Vestibulum cursus lorem vitae est rutrum eleifend. Sed ac velit id leo placerat rutrum ac quis mi.

Nulla bibendum consequat risus, eu pellentesque mauris imperdiet sed. Aliquam at scelerisque nunc, eu commodo justo. Sed sed nulla ut justo commodo vehicula id ut sem. Curabitur pulvinar dolor sit amet est egestas vestibulum. Maecenas eget urna dictum, vehicula nulla id, viverra sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras faucibus ornare nibh, a tincidunt libero pharetra imperdiet. Nam auctor justo risus, vel blandit orci dictum quis. Sed sit amet nibh sem. Morbi nunc nulla, luctus sit amet ipsum id, porta porta lorem.

In viverra arcu sed risus suscipit, non vehicula tellus porttitor. Integer pulvinar libero ut consequat rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris sed varius ligula, in volutpat purus. Curabitur quis quam sit amet urna posuere rutrum quis vel dolor. Curabitur purus mauris, aliquet sit amet mauris eget, egestas dapibus enim. Ut dignissim imperdiet eros a tincidunt. Sed vel tortor ac tortor blandit egestas nec sit amet urna.`;

//Make your program count the number of words in the string.

let words = lorem.split(' ').length;

console.log(`The number of words is ${words}`);

// Make your program count the number of times the Latin word et appears. */

let etCounter = lorem.match(/et/g).length;

console.log(`The counter of et words is ${etCounter}`);

/* Create a new variable phraseToCheck and have it contain some string value. 
Write a code that will check if the value we assigned to this variable is a Palindrome. 
*/

let phraseToCheck = "Leonardo";
let isPalindrome = phraseToCheck.split('').reverse().join('')

if (phraseToCheck.toUpperCase() === isPalindrome.toUpperCase()) {
    console.log(`This phrase is a Palindrome! Example: ${phraseToCheck.toUpperCase()} and ${isPalindrome.toUpperCase()}`)
} else {console.log(`This phrase is not a Palindrome! Example: ${phraseToCheck.toUpperCase()} and ${isPalindrome.toUpperCase()}`)}