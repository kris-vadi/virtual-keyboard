export function createHeader() {
  const header = document.createElement('header');
  const wrapper = document.createElement('div');
  const title = document.createElement('h1');

  header.classList.add('header');
  wrapper.classList.add('wrapper');

  title.classList.add('header__title');
  title.innerText = 'RSS Виртуальная клавиатура.'

  header.appendChild(wrapper);
  wrapper.appendChild(title);
  
  return header;
};