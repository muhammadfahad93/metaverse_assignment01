var places = ["London","Paris","New York","Moscow","Dubai","Tokyo"];

console.log(places);
const ordered_places = [...places].sort();
console.log(ordered_places);
console.log(places);
const reverse_ordered_places = [...places].reverse();
console.log(reverse_ordered_places);
const reverse_reverse_places = [...reverse_ordered_places].reverse();
console.log(reverse_reverse_places);