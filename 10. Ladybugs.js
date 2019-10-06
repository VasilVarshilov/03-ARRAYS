function solve(input) {
    let fieldSize = input.shift();
    let ladyBugIndexes = input.shift();


    ladyBugIndexes = ladyBugIndexes.split(' ');


    // creating the field
    var field = new Array;
    for (let i = 0; i < fieldSize; i++) {
        field.push(0);
    }
    // setting the indexes. 
    for (let i = 0; i < ladyBugIndexes.length; i++) {
        field.splice(+ladyBugIndexes[i], 1, 1);
    }
    // -----------------START----------------- //
    console.log(field);
    let command = input.shift();
    command = command.split(' ');
    while (command !== undefined) {
        let ladyBug = Number(command[0]);
        let direction = command[1];
        let flyLength = Number(command[2]);

        if (ladyBug < field.length
            && ladyBug >= 0
            && field[ladyBug] == 1
            && flyLength !== 0) {

            if (direction == 'right') {
                if (ladyBug + flyLength < field.length
                    && ladyBug + flyLength >= 0
                    && field[ladyBug + flyLength] == 0) {
                    field[ladyBug + flyLength] = 1;
                } else if (ladyBug + flyLength < field.length
                    && ladyBug + flyLength >= 0
                    && field[ladyBug + flyLength] == 1) {

                    while (ladyBug + flyLength < field.length
                        && ladyBug + flyLength >= 0
                        && field[ladyBug + flyLength] == 1) {
                        flyLength += flyLength;

                        if (ladyBug = flyLength < field.length
                            && ladyBug + flyLength >= 0) {
                            field[ladyBug + flyLength] = 1;
                            break;
                        }
                    }
                }
            } else if (direction == "left") {

                if (ladyBug - flyLength >= 0
                    && ladyBug - flyLength < field.length
                    && field[ladyBug - flyLength] == 0) {
                    filed[ladyBug - flyLength >= 1]
                } else if (ladyBug - flyLength >= 0
                    && ladyBug - flyLength < field.Length
                    && field[ladyBug - flyLength] == 1) {

                    while (ladyBug - flyLength < field.length
                        && ladyBug - flyLength < field
                        && field[ladyBug - flyLength] == 1) {
                        flyLength += flyLength;

                        if (ladyBug - flyLength >= 0
                            && ladyBug - flyLength < field.Length
                            && field[ladyBug - flyLength] == 0) {
                            field[ladyBug - flyLength] = 1;
                            break;
                        }
                    }
                }
            }
        }


        command = input.shift();
    }
    
    console.log(field);
}
// NOT WORKING .....WORTH TRYING...
solve([3, '0 1', '0 right 1', '2 right 1']);