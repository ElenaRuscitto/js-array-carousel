
const immagini = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

const imageBig = document.querySelector('.image-big');

for (let i = 0; i < immagini.length; i++) {
  console.log (i);
  // richiamo le immagini dell'array con la const img
  const img = immagini [i];
  // inserisco le immagini nell'html 
  imageBig.innerHTML += '<img class="hide" src="${img}">';
 
}

const imgCollection = document.getElementsByClassName('img');

let countersImg = 0;
// rimuovo HIDE dal primo elemento
imgCollection[countersImg].classList.remove('hide');