const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert('number is greater then 0.7');
}

const numberArray = [5, 15, 25, 35, 45, 55];

for (let i = 0; i < numberArray.length; i++) {
  const element = numberArray[i];
  console.log(element);
}

numberArray.forEach(element => {
  console.log(element);
});

for (let i = numberArray.length - 1; i >= 0; i--) {
  const element = numberArray[i];
  console.log(element);
}

//Both are greater 0.7 OR at least one of the two is NOT greater than 0.2.
const randomNumberTwo = Math.random();

if (randomNumber > 0.7 && randomNumberTwo > 0.7) {
  alert('both randoms are greater then 0.7');
} else if (randomNumber < 0.2 || randomNumberTwo < 0.2) {
 alert('a random number, or maybe both are below 0.2');
}