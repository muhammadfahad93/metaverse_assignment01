var person_name = "   \n  \t Fahad Abid \t \n ";
console.log(person_name);
var final_person_name = person_name.replace(/[^a-zA-z]/g, ''); // regex here replaces any non alphabet character with nothing
console.log(final_person_name);