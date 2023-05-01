import keys from './keys.js';

export default function fillButtons(keyboard, lang, capsLookPressed) {
  Object.keys(keys).forEach((key) => {
    const keyButton = keyboard.querySelector(`.${key}`);
    const [a, b, c, d] = keys[key];

    if (lang === 'eng') {
      (capsLookPressed) ? keyButton.innerHTML = c : keyButton.innerHTML = a;
    }
    if (lang === 'ru') {
      (capsLookPressed) ? keyButton.innerHTML = d : keyButton.innerHTML = b;
    }
  });
}
