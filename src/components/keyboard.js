import clickKey from './clickKey.js';
import keys from './keys.js';
import fillButtons from './fillButtons.js';

export default function createKeyboard() {
  const keyboard = document.createElement('div');
  let flagLang = false;
  let capsLookPressed = false;
  let lang = 'eng';
  let upperCase = false;

  keyboard.classList.add('keyboard');

  Object.keys(keys).forEach((key) => {
    const keyButton = document.createElement('button');
    keyButton.classList.add('key');
    keyButton.classList.add(key);
    keyboard.appendChild(keyButton);
  });

  fillButtons(keyboard, lang, capsLookPressed);

  const changeLang = (k) => {
    if (k === 'AltLeft') {
      flagLang = true;
    }
    if (k === 'ShiftLeft' && flagLang === true) {
      flagLang = false;
      if (lang === 'eng') {
        lang = 'ru';
      } else {
        lang = 'eng';
      }
      fillButtons(keyboard, lang, capsLookPressed);
    }
  };

  const pressCaps = (k) => {
    if (k === 'CapsLock') {
      if (capsLookPressed === true) {
        capsLookPressed = false;
      } else { capsLookPressed = true; }

      fillButtons(keyboard, lang, capsLookPressed);
    }
  };

  const downShift = (k) => {
    if (k === 'ShiftLeft' || k === 'ShiftRight') {
      upperCase = true;
      Object.keys(keys).forEach((key) => {
        const keyButton = keyboard.querySelector(`.${key}`);
        const [a, b, c, d] = keys[key];

        if (lang === 'eng') {
          if (capsLookPressed && upperCase === true) {
            keyButton.innerHTML = a;
          } else { keyButton.innerHTML = c; }
          if (!capsLookPressed && upperCase === true) {
            keyButton.innerHTML = c;
          } else { keyButton.innerHTML = a; }
        }
        if (lang === 'ru') {
          if (capsLookPressed && upperCase === true) {
            keyButton.innerHTML = b;
          } else { keyButton.innerHTML = d; }
          if (!capsLookPressed && upperCase === true) {
            keyButton.innerHTML = d;
          } else { keyButton.innerHTML = b; }
        }
      });
    }
  };

  const upShift = (k) => {
    if (k === 'ShiftLeft' || k === 'ShiftRight') {
      upperCase = false;
      Object.keys(keys).forEach((key) => {
        const keyButton = keyboard.querySelector(`.${key}`);
        const [a, b, c, d] = keys[key];

        if (lang === 'eng') {
          if (capsLookPressed && upperCase === false) {
            keyButton.innerHTML = c;
          } else { keyButton.innerHTML = a; }
          if (!capsLookPressed && upperCase === false) {
            keyButton.innerHTML = a;
          } else { keyButton.innerHTML = c; }
        }
        if (lang === 'ru') {
          if (!capsLookPressed && upperCase === false) {
            keyButton.innerHTML = b;
          } else { keyButton.innerHTML = d; }
          if (capsLookPressed && upperCase === false) {
            keyButton.innerHTML = d;
          } else { keyButton.innerHTML = b; }
        }
      });
    }
  };

  document.addEventListener('keydown', (event) => {
    const pressButton = document.querySelector(`.${event.code}`);

    pressButton.classList.add('key-active');

    event.preventDefault();
    changeLang(event.code);
    pressCaps(event.code);
    downShift(event.code);
    clickKey(event.code);
  });

  document.addEventListener('keyup', (event) => {
    document.querySelectorAll('.key').forEach((el) => el.classList.remove('key-active'));

    upShift(event.code);
  });

  document.addEventListener('mousedown', (event) => {
    if (event.target.closest('.key')) {
      const pressButton = document.querySelector(`.${event.target.classList[1]}`);

      pressButton.classList.add('key-active');

      pressCaps(pressButton.classList[1]);
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
