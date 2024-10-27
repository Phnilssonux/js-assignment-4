const exampleArray = [1, 2, 3, 4, 5, 6];
const result = sumEvenNumbers(exampleArray);
console.log("The sum of even numbers is:", result);

function sumEvenNumbers(arr) {
    let sumOfEvens = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumOfEvens += arr[i];
        }
    }
    return sumOfEvens;
}