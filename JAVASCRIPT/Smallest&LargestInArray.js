let arr = [4, 2, 9, 1, 7];

let smallest = arr[0];
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }

  if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log("Smallest:", smallest);
console.log("Largest:", largest);
