function mergeArrays(arr1, arr2) {

    let outputArr = [];

    for (let i = 0; i < arr1.length; i++) {

        if (i % 2 === 0) {

            let firstNum = Number(arr1[i]);
            let secondNum = Number(arr2[i]);

            outputArr.push(firstNum + secondNum);

        }
        else {
            outputArr.push(arr1[i] + arr2[i]);
        }

    }

console.log(outputArr.join(" - "));


}
mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);