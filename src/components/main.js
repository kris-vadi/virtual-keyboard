import createKeyboard from './keyboard.js';

export default function createMain() {
  const main = document.createElement('main');
  const wrapper = document.createElement('div');
  const textarea = document.createElement('textarea');
  const description = document.createElement('div');
  const textWin = document.createElement('p');
  const textLng = document.createElement('p');

  main.classList.add('main');
  wrapper.classList.add('wrapper');
  textarea.classList.add('textarea');
  description.classList.add('description');

  textWin.innerText = 'Cоздана в Windows';
  textLng.innerText = 'Переключение языка: (левый) Alt + (левый) Shift';
  description.appendChild(textWin);
  description.appendChild(textLng);

  main.appendChild(wrapper);
  wrapper.appendChild(textarea);
  wrapper.appendChild(createKeyboard());
  wrapper.appendChild(description);

  textarea.addEventListener('blur', (event) => {
    event.target.focus();
  });

  return main;
}
