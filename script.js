const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btn = document.querySelector(".generate");
let sugess1 = document.querySelector(".pass1");
let sugess2 = document.querySelector(".pass2");

function gen(){
    sugess1.textContent=""
    sugess2.textContent=""
  for(let x = 0 ; x<15 ; x++){ 
        for(let i =0 ; i<1 ; i++){
            let random = Math.floor(Math.random()*characters.length);
            let pass = characters[random] 
                for(let j = 0; j<1 ; j++){
                    sugess1.textContent+=pass;
                }     
        }
    }
//second pass generator loop

for(let x = 0 ; x<15 ; x++){ 
        for(let i =0 ; i<1 ; i++){
            let random = Math.floor(Math.random()*characters.length);
            let pass = characters[random] 
                for(let j = 0; j<1 ; j++){
                    sugess2.textContent+=pass;
                }     
        }
    }
    

}



