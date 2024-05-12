const img = document.querySelector('#buy-image');
const whiteSVGFirst = document.querySelector('#circle-white-first');
const whiteSVGSecond = document.querySelector('#circle-white-second');
const blackSVGFirst = document.querySelector('#circle-black-first');
const blackSVGSecond = document.querySelector('#circle-black-second');
const imgWhite = document.querySelector('#buy-image-white');
const whiteButton = document.querySelector('#buy-white-button');
const blackButton = document.querySelector('#buy-black-button');

whiteButton.addEventListener('click', onClickWhite);
blackButton.addEventListener('click', onClickBlack);

function onClickBlack(e) {
  whiteSVGFirst.classList.remove('visually-hidden');
  whiteSVGSecond.classList.add('visually-hidden');

  blackSVGFirst.classList.remove('visually-hidden');
  blackSVGSecond.classList.add('visually-hidden');

  img.classList.remove('visually-hidden');
  imgWhite.classList.add('visually-hidden');
}

function onClickWhite(e) {
  whiteSVGFirst.classList.add('visually-hidden');
  whiteSVGSecond.classList.remove('visually-hidden');

  blackSVGFirst.classList.add('visually-hidden');
  blackSVGSecond.classList.remove('visually-hidden');

  img.classList.add('visually-hidden');
  imgWhite.classList.remove('visually-hidden');
}