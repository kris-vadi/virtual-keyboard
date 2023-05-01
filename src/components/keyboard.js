import clickKey from './clickKey.js';
import keys from './keys.js';
import fillButtons from './fillButtons.js';

export default function createKeyboard() {
  const keyboard = document.createElement('div');
  let flagLang = false;
  let lang = 'eng';
  const capsLookPressed = false;
  const upperCase = false;

  keyboard.classList.add('keyboard');

  Object.keys(keys).forEach((key) => {
    const keyButton = document.createElement('button');
    keyButton.classList.add('key');
    keyButton.classList.add(key);
    keyboard.appendChild(keyButton);
  });

  fillButtons(keyboard, lang, capsLookPressed);

  window.addEventListener('keydown', (event) => {
    const pressButton = document.querySelector(`.${event.code}`);

    pressButton.classList.add('key-active');

    event.preventDefault();

    if (event.code === 'AltLeft') {
      flagLang = true;
    }
    if (event.code === 'ShiftLeft' && flagLang === true) {
      flagLang = false;
      if (lang === 'eng') {
        lang = 'ru';
      } else {
        lang = 'eng';
      }
      fillButtons(keyboard, lang, capsLookPressed);
    }

    clickKey(event.code);
  });

  window.addEventListener('keyup', () => {
    document.querySelectorAll('.key').forEach((el) => el.classList.remove('key-active'));
  });

  document.addEventListener('mousedown', (event) => {
    if (event.target.closest('.key')) {
      const pressButton = document.querySelector(`.${event.target.classList[1]}`);

      pressButton.classList.add('key-active');

      clickKey(pressButton.classList[1]);
    }
  });

  document.addEventListener('mouseup', (event) => {
    if (event.target.closest('.key')) {
      const pressButton = document.querySelector(`.${event.target.classList[1]}`);

      pressButton.classList.remove('key-active');
    }
  });

  return keyboard;
}
