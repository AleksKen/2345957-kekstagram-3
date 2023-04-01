import {isESC} from './until.js';

const inputPicture = document.querySelector('#upload-file');
const buttonCancel = document.querySelector('#upload-cancel');

inputPicture.addEventListener('change', () => {
  openWindow();
});

buttonCancel.addEventListener('click', () => {
  closeWindow();
});

const closeOnButton = (evt) => {
  if (isESC(evt)) {
    evt.preventDefault();
    closeWindow();
  }
};

function openWindow() {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnButton);
}

function cleanForm() {
  inputPicture.value = '';
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
}

function closeWindow() {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnButton);
  cleanForm();
}