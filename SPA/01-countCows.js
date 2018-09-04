function countCowsByFor (years) {
    const cowList = [1];
    for(var i = 1; i <= years; i++){
        for(var j = 0; j < cowList.length; j++){
            if (cowList[j] < 4) {
                cowList[j]++;
            } else {
                cowList.push(1);
            }
        }
    }
    return cowList.length;
}

function countCowsByRec(years) {
    if (years < 4) {
        return 1
    } else {
        return countCows(years - 1) + countCows(years - 3);
    }
}

console.log(countCows(1));
console.log(countCows(2));
console.log(countCows(3));
console.log(countCows(4));
console.log(countCows(5));
console.log(countCows(6));
console.log(countCows(7));
console.log(countCows(8));
console.log(countCows(9));
console.log(countCows(10));