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
    
    keyButton.classList.add('button');
    keyButton.classList.add(key);

    

    keyboard.appendChild(keyButton);
  }

  return keyboard;
};
