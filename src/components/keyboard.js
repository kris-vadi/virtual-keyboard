import keys from './keys.js';

export default function createKeyboard() {
  const keyboard = document.createElement('div');

  keyboard.classList.add('keyboard');

  // document.addEventListener('keydown', (event) => {
  //   console.log(event.code);
  //   console.log(event.key);
  // });
  for(const key in keys) {
    const keyButton = document.createElement('button');
    
    keyButton.classList.add('key');
    keyButton.classList.add(key.toLocaleLowerCase());

    keyButton.innerHTML = keys[key][0];

    keyboard.appendChild(keyButton);
  }

  return keyboard;
};
