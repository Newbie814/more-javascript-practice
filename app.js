function calculateTotal(subTotal, tax) {
  return subTotal + subTotal * tax;
}

console.log(calculateTotal(1, 0.07)); // 1.07

let order1 = calculateTotal(1, 0.07).toFixed(2);
let order2 = calculateTotal(2, 0.065).toFixed(2);
let order3 = calculateTotal(3, 0.06).toFixed(2);

console.log(order1, order2, order3); // 1.07 2.13 3.18

const car = {
  make: 'Ford',
  model: 'F100',
  year: 1977,
  colors: ['red', 'blue', 'green'],
  hybrid: false,
  drive: function () {
    console.log('Vrooom!');
  },
  stop() {
    console.log('Screech!');
  },
};

console.log(car.make); // Ford
console.log(car.colors[1]); // blue

car.drive(); // Vrooom!
car.stop(); // Screech!
