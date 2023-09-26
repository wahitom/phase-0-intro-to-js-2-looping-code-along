// Code your solutions in this file

/* function writeCards(names, message ){
    //const names =["Guadalupe", "Ollie", "Aki"]
    //const message = "suprise"
    for (let i = 0; i < names.length; i++){
        console.log(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
    }

}
writeCards(["Guadalupe", "Ollie", "Aki"],  "suprise" );  */

function writeCards(names, message) {
    for (let i = 0; i < names.length; i++){
        console.log(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
    }
}

const names = ["Guadalupe", "Ollie", "Aki"];
const message = "surprise";
const thankYouMessages = writeCards(names, message);
console.log(thankYouMessages);


function countDown(){
    for(let i = 0; i<=10; i++){
        console.log(i);
    }
}
console.log(countDown())