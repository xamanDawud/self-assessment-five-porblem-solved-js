function feetToInch(num) {
    let calculate = num * 12;
    return calculate;
}
// console.log(feetToInch(2));

function centimeterToMeter(num) {
    let calculate = num * 0.01;
    return calculate;
}
// console.log(centimeterToMeter(2));

function paperRequirements(b1, b2, b3) {
    const book_one = b1 * 100;
    const book_two = b2 * 200;
    const book_three = b3 * 300;
    return book_one + book_two + book_three;
}

// console.log(paperRequirements(2, 1, 2));

function bestFriend(array) {
    if (Array.isArray(array) !== false) {
        let tallest_friend = array[0];
        for (let i = 1; i < array.length; i++) {
            let friend = array[i];
            if (tallest_friend.length < friend.length) {
                tallest_friend = friend;
            }
        }
        return tallest_friend;
    } else {
        return "Plese Enter a Array";
    }
    //    return tallest_friend;
}

// console.log(bestFriend(["x", "toe", "jo"]));

function continue_without_negetive_number(array) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            break;
        } else {
            res.push(array[i]);
        }
    }
    return res;
}

console.log(
    continue_without_negetive_number([5, 4, 5, 4, 11, -20, 10, 55, 23])
);