
const immagini = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

const imageBig = document.querySelector('.image-big');

for (let i = 0; i < immagini.length; i++) {
  console.log (i);
  // richiamo le immagini dell'array con la const img
  const img = immagini[i];
  console.log (immagini);
  // inserisco le immagini nell'html 
  imageBig.innerHTML += `<img class="img hide" src="${img}">`;
 
}
// richiamo la classe img per inserirla nella imgCollection
const imgCollection = document.getElementsByClassName('img');
// contatore immagini
let countersImg = 0;
// rimuovo HIDE dal primo elemento
imgCollection [0].classList.remove('hide');

// creo la constante del btn up (chevron)
const btnUp = document.querySelector('.up');

btnUp.addEventListener ('click', function() {
  // al click del bntUp, la classe HIDE la metto al' immagine corrente
  imgCollection[countersImg].classList.add('hide');

  // all'incrementare del click del bntUp, la classe HIDE la rimuovo
  countersImg++;
  console.log(countersImg)


  // creo la condizione che SE il contatore dall'immagine 4 deve ritornare all'img 0
  if (countersImg >= immagini.length) {
    countersImg = 0;
    console.log(countersImg)
  }


   // all'incrementare del click del bntUp, la classe HIDE la rimuovo
  imgCollection[countersImg].classList.remove('hide');

})

// creo la constante del btn down (chevron)
const btnDown = document.querySelector('.down');
btnDown.addEventListener ('click', function() {
  // al click del bntUp, la classe HIDE la metto al' immagine corrente
  imgCollection[countersImg].classList.add('hide');

  // all'incrementare del click del bntUp, la classe HIDE la rimuovo
  countersImg--;
  console.log(countersImg)

  // creo la condizione che SE il contatore dall'immagine 0 deve ritornare all'img 4
  if (countersImg < 0) {
    countersImg = immagini.length-1;
  }


  // all'incrementare del click del bntUp, la classe HIDE la rimuovo
  imgCollection[countersImg].classList.remove('hide');


})