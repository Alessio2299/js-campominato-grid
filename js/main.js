// Creare le variabili che inzialmente mi posso servire
let container = document.getElementById("container");
const button = document.getElementById("play");
let box = "";


// Salvare il valore della difficolta scelta dal giocatore
let levels = document.getElementById("levels");
let difficulty = "";

// Creare un evento sul bottone play per avviare il gioco
button.addEventListener("click",
  function(){
    container.innerHTML = "";

    // Stabilire delle condizioni in base alla difficoltà scelta
    if(levels.value == "easy"){
      difficulty = 100;
      box = "box-small"; 
    } else if(levels.value == "hard"){
      difficulty = 81;
      box = "box-medium"; 
    } else{
      difficulty = 49;
      box = "box-big";  
    }

    // Creare un ciclo for, per stampare un tot di box in base alla difficoltà selezionata
    for(let i = 0; i<difficulty; i++){
      const div = document.createElement("div");

      // Inserire le classi che mi servono
      container.appendChild(div);
      div.innerHTML += [i + 1];
      div.classList.add(box);
      div.classList.add("box");

      div.addEventListener("click",
        function(){
          div.classList.add("active")
        }
      )
    }
  }
)







