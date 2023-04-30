export default function createMain() {
  const main = document.createElement('main');
  const wrapper = document.createElement('div');

  main.classList.add('main');
  wrapper.classList.add('wrapper');

  main.appendChild(wrapper);

  return main;
}
