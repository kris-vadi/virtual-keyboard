export default function createMain() {
  const main = document.createElement('main');
  const wrapper = document.createElement('div');
  const textarea = document.createElement('textarea');
  const description = document.createElement('div');

  main.classList.add('main');
  wrapper.classList.add('wrapper');
  textarea.classList.add('textarea');
  description.classList.add('description');

  main.appendChild(wrapper);
  wrapper.appendChild(textarea);
  wrapper.appendChild(description);

  return main;
}
