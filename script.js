

// Fonctionnalité 1 :
// lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.
// Cette fonctionnalité doit être codée avec un addEventListener("click", function(){ } car c'est une bonne habitude à prendre ! 😇
var i = 1;
var footer1 = document.querySelector("footer");
footer1.addEventListener('click', msg1);
//Fonction qui affiche le mot "clique" en console.
function msg1() {
    console.log(`clic numéro ${i}`);
    i++;
}


// Fonctionnalité 1-bis :
// lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.


// Fonctionnalité 2 :
let myNavbar = document.getElementById('navbarHeader');
let button = document.getElementsByTagName('button');

button[0].addEventListener('click', function(){
  myNavbar.classList.toggle('collapse')
});



//fonctionnalité 3 
// let editButton = document.getElementsByClassName("btn-sm btn-outline-secondary")[0];
// editButton.addEventListener("click", redEdit);
// function redEdit() {
//     let element = document.querySelector("p.card-text");
//     element.classList.toggle("text-danger");
// }

let card = document.getElementsByClassName("card-body")[0];
function changeColor (){
    card.getElementsByTagName("p")[0].style.color = 'red' ;
}

card.addEventListener ("click", changeColor)



//fonctionnalité 4
let secondCard = document.getElementsByClassName("card-body")[1];
let editButton2 = document.getElementsByClassName("btn-sm btn-outline-secondary")[1];
editButton2.addEventListener("click", greenEdit);
function greenEdit() {
    let element2 = document.querySelectorAll("p.card-text")[1];
    element2.classList.toggle("text-success");
}
// Fonctionnalité 5 : 

let navbar = document.getElementsByClassName("navbar")[0];
let bootsLink = document.getElementsByTagName("link")[0];

navbar.addEventListener("dblclick", function(){
  if (bootsLink.rel == "stylesheet") {
    bootsLink.rel = "styleDisabled";
  } else {
    bootsLink.rel = "stylesheet";
  }
});

// Fonctionnalité 6 :


//Fonctionnalité 7


//Fonctionnalité 8

