
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