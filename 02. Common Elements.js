function commonElements(arr1, arr2) {

    arr1.forEach((element, index) => {
        let includes = arr2.includes(element);

        if (includes) {
            console.log(element);
            
        }

    });

}
commonElements(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
);