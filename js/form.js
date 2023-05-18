import {isESC} from './until.js';
import {initEffect, resetEffect} from './effects.js';

const inputPicture = document.querySelector('#upload-file');
const buttonCancel = document.querySelector('#upload-cancel');

const openWindow = () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnButton);
};


const cleanForm = () => {
  inputPicture.value = '';
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
  resetEffect();
  document.querySelector('.scale__control--value').value = '100%';
};

const closeWindow = (needToClean) => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnButton);
  if (needToClean) {
    cleanForm();
  }
};

const initForm =() =>{
  inputPicture.addEventListener('change', () => {
    openWindow();
  });
  buttonCancel.addEventListener('click', () => {
    closeWindow(true);
  });
  initEffect();
};

function closeOnButton(evt) {
  if (isESC(evt)) {
    evt.preventDefault();
    closeWindow(true);
  }
}

export {closeWindow, openWindow, initForm};
