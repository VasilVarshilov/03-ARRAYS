function solve(arr) {

    let health = 100;
    let coins = Number(0);
    let roomCounter = 0;

    let adventure = arr[0].split('|');

    for (let i = 0; i < adventure.length; i++) {

        let room = adventure[i].split(' ');
        let index_number = Number(room[1]);
        let command = room[0];
        roomCounter++;
        if (command == 'potion') {

            if (health + index_number > 100) {
                index_number = 100 - health;
                health = 100;
            } else {
                health += index_number;
            }

            console.log(`You healed for ${index_number} hp.`);
            console.log(`Current health: ${health} hp.`);

           

        } else if (command == 'chest') {
            coins += index_number;
            //roomCounter++;
            console.log(`You found ${index_number} coins.`);
           
        } else {
            health -= index_number;
            let monster = command;

            if (health > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log('Best room: ' + roomCounter);
                return;
            }
           
        }

    }
    if (health > 0) {
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
    }
}