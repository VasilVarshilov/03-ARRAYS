function solve(arr1) {
    var mf = 1;
    var m = 0;
    var item;
    var checker = true;
    var resultArray = new Array;
    for (var i = 0; i < arr1.length; i++) {
        for (var j = i; j < arr1.length; j++) {
            if (arr1[i] == arr1[j])
                m++;
            if (mf < m) {
                mf = m;
                item = arr1[i];
            }
        }
        m = 0;
    }

    for (let r = 0; r < arr1.length; r++) {
        if (arr1[r] == arr1[r + 1]) {

            if (arr1[r] == item) {
                if (checker) {
                    resultArray.push(arr1[r]);
                    checker = false;
                }
                resultArray.push(arr1[r + 1]);
            }
        }
    }

    console.log(resultArray.join(' '));
}