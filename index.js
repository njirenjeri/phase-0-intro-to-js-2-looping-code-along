// Code your solutions in this file
const array = ["Guadalupe", "Ollie", "Aki"];

function writeCards(array){
    let thankMessages = [];
    for(let i = 0; i < array.length; i++ ){
        thankMessages.push( `Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }
    return thankMessages;
}

function countDown(num){
    while(num >= 0){
        console.log(num);
        num --;
    }
}