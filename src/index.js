const img = document.querySelector('#buy-image');
const imgWhite = document.querySelector('#buy-image-white');
const whiteButton = document.querySelector('#buy-white-button');
const blackButton = document.querySelector('#buy-black-button');

whiteButton.addEventListener('click', onClickWhite);
blackButton.addEventListener('click', onClickBlack);

function onClickBlack(e) {
  // img.src = blackPhones;
  img.classList.remove('visually-hidden');
  imgWhite.classList.add('visually-hidden');
}

function onClickWhite(e) {
  // img.src = whitePhones;
  img.classList.add('visually-hidden');
  imgWhite.classList.remove('visually-hidden');
}