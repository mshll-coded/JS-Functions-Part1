/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName() {
  console.log('Meshal');
}
printName();

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(birth_year) {
  console.log(new Date().getFullYear() - birth_year);
}
printAge(1998);

/**
 * Task 3:
 * Create a function named `printAgeAndName`
 * - that takes a birth year and your name as parameters,
 * - and prints 'Hello NAME you are AGE years old' on the screen.
 * - Age = current year - birth
 */
function printAgeAndName(name, birth_year) {
  console.log(`Hello ${name} you are ${new Date().getFullYear() - birth_year} years old`);
}
printAgeAndName('Meshal', 1998);

/**
 * Task 4:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, lang) {
  let greeting = 'Hello';
  if (lang === 'es') greeting = 'Hola';
  if (lang === 'fr') greeting = 'Bonjour';
  if (lang === 'tr') greeting = 'Merhaba';
  console.log(`${greeting} ${name}`);
}
printHello('Meshal', 'es');

/**
 * Task 5:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(x, y) {
  console.log(x > y ? x : y);
}
printMax(44, -9);
