var inivte_list = ['Honda','Toyato','Audi','BMW']

for (i of inivte_list)
console.log(`Hey ${i}, Please join me on dinner today at 11:00pm`)


console.log(`Found a bigger table`);

inivte_list.unshift('Merz')
inivte_list.splice(inivte_list.length/2,0,'Hyandui')
inivte_list.push('Tesla',)

for (i of inivte_list)
console.log(`Hey ${i}, Please join me on dinner today at 11:00pm`)

console.log('___________________________________________________________');

console.log('Just got the call only 2 people are allowd')

for (let i = 0; inivte_list.length !=2 ;i++){
    console.log(`Hey ${inivte_list.pop()}, Sorry place is full you can come to the dinner`)
}


for (i of inivte_list)
    console.log(`Hey ${i}, Please join me on dinner today at 11:00pm`)

    while (inivte_list.length != 0)
    inivte_list.pop()

console.log('___________________________________________________________');
    
console.log(`Current list ${inivte_list}`)
   