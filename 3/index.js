/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

var person_name ="Fahad Abid";
console.log(`Upper Case = ${person_name.toUpperCase()}`);
console.log(`Lower Case = ${person_name.toLowerCase()}`);
console.log(`Lower Case = ${titleCase(person_name)}`);

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
