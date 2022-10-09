let magicians = ["magician1", "magician2", "magician3"];


function make_great(magicians){
    for(let i = 0; i < magicians.length; i++){
      magicians[i] = magicians[i] + " the Great";
    }
  }

function show_magicians(magicians) {
    for (i of magicians)
    console.log(`${i}`)

}
make_great(magicians);
show_magicians(magicians);