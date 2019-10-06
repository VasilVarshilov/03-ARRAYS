const arr = [1, 2 , 3, "ooo"]

arr[8] = 6;
arr["Pesho"] = 89;
arr [-9] = 90;

arr.forEach((elements, i, arrays) => console.log(elements, i));

//for of - vrushta vsichko bez parazitite(tiq s minus i tnt)
//for in - vrushta vsichki index-i (zaedno s parazitnite)
//for in samo za obekti!
//forEach ne moje da se break-va
