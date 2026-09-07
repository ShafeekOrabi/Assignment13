let arr = [];

arr.push(55);
arr.unshift(13, 18);
arr.push(127);

console.log(arr[0]);
console.log(arr.length);
console.log(typeof arr);

console.log("---While Loop---");
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

console.log("---Do-While Loop---");
i = 0;
do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);

console.log("---For Loop---");
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("---For-of Loop---");
for (let element of arr) {
  console.log(element);
}

console.log("---Calculating Total---");
let total = 0;

for (let element of arr) {
  total = total + element;
}

console.log(total);

console.log("---Logging all the elements that divided by 3 and 5---");
for (let element of arr) {
  if (element % 3 === 0 || element % 5 === 0) {
    console.log(element);
  }
}

console.log("---Skipping all elements that divided by 5 and 11---");
for (let element of arr) {
  if (element % 5 === 0 && element % 11 === 0) {
    continue;
  }

  console.log(element);
}

console.log("---Exiting when any element divided by 3---");
for (let element of arr) {
  if (element % 3 === 0) {
    break;
  }

  console.log(element);
}

console.log("---Remove first element of the array---");
arr.shift();
for (let element of arr) {
  console.log(element);
}

console.log("---Remove last element of the array--");
arr.pop();
for (let element of arr) {
  console.log(element);
}

console.log("---Logging all the elements using for loop--");
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("---Three Nested loops--");
firstLoop: for (let i = 0; i <= 5; i++) {
  secondLoop: for (let j = 0; j <= 5; j++) {
    thirdLoop: for (let k = 0; k <= 5; k++) {
      console.log(`i=${i}, j=${j}, k=${k}`);

      if (i === j - 1 && j === k - 1) {
        break firstLoop;
      }
    }
  }
}
