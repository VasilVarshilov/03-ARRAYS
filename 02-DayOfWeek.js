function solve(num) {
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (num < 1 || num > 7) {
        console.log("Invalid day!");
    }
    else {
        console.log(weekDays[num - 1]);
    }
}
solve(5);