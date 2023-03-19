
// We can concatenate Arrays using the concat() method.
const girls = ["Vanessa", "Julia", "Elizabeth"];
const boys = ["Jared", "Jessie"];
const babies = ["Howard"];

// concat() can take any number of array arguments and concatenate them:
const kids = girls.concat(boys, babies);
console.log(kids); // Output || [ 'Vanessa', 'Julia', 'Elizabeth', 'Jared', 'Jessie', 'Howard' ]



// concat() can also take Strings as arguments.
const minerals = ["Gold", "Diamond", "Ruby"];
const newMinerals = minerals.concat("Sapphire");

console.log(newMinerals); // Output || [ 'Gold', 'Diamond', 'Ruby', 'Sapphire' ]