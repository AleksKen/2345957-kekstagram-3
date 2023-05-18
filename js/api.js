import {renderingThumbnail} from './render.js';
import {checkError} from './until.js';
import {isFail, isSuccess} from './check.js';
import {closeWindow, initForm} from './form.js';

const getPicturesFromServer = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((response) => renderingThumbnail(response))
    .catch(() => checkError('Ошибка подгрузки изображений!'));
  initForm();
};


const sendData = (evt) => {
  const data = new FormData(evt.target);
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: data,
    },
  )
    .then((response) => {
      if (response.ok) {
        closeWindow(true);
        isSuccess();
      } else {
        closeWindow(false);
        isFail();
      }
    });
};

export {getPicturesFromServer, sendData};
