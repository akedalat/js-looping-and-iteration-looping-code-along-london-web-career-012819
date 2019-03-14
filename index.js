// Code your solutions in this file
function printBadges(arr){

    for (let i = 0; i < arr.length; i++){
        console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`)
    }
    return arr
}

function tailsNeverFails(){
    counter = 0
    let num =  Math.random() >= 0.5
    while (num >= 0.5){
            counter++
    }
    return `You got ${counter} tails in a row!`
}

