function solve(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        element % 2 == 0 ? evenSum += element : oddSum += element;
    }
    console.log(evenSum-oddSum)
}
solve([1, 2, 3, 4, 5, 6]);