function maxNumber(arr) {
    
    let outputArr = [];

    for(let i = 0; i < arr.length; i++){

        let currentElement = arr[i];
        let rightElements = arr.slice(i + 1);


        let isBigger = true;

        for(let s = 0; s < rightElements.length; s++){

            if(currentElement <= rightElements[s]){
                isBigger = false;
                break;
            }
        }

        if(isBigger){
            outputArr.push(currentElement);
        }
    }

    console.log(outputArr.join(" "));
    

}
maxNumber(
    [14, 24, 3, 19, 15, 17]
);