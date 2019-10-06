function name(arr) {

    let originalSum = 0;
    let modifiedSum = 0;

    let outputArr = [];

    for (let i = 0; i <= arr.length - 1; i++) {

        let currentValue = arr[i];

        originalSum += currentValue;

        if (currentValue % 2 === 0) {
            currentValue += i;
            outputArr.push(currentValue);
        }
        else {
            currentValue -= i
            outputArr.push(currentValue);
        }

        modifiedSum += currentValue;

    }

    console.log(outputArr);
    console.log(originalSum);
    console.log(modifiedSum);

}
name([5, 15, 23, 56, 35]);