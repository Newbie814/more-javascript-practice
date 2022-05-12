// Arrays, Functions, and Objects
// Arrays - [] , 0 index based

const friend1 = 'Sandra';
const friend2 = 'Liam';
const friend3 = 'Connor';
const friend4 = 'Keno';

const friends = ['Sandra', 'Liam', 'Connor', 'Keno', 1, 55, undefined, null];

// Access value
console.log(friends[2]); // Connor

let bestFriend = friends[0];
console.log(bestFriend); // Sandra

//change value
friends[4] = 'Logan';
console.log(friends); // ['Sandra', 'Liam', 'Connor', 'Logan', 1, 55, undefined, null]
