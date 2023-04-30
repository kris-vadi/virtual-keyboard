export default function createFooter() {
  const footer = document.createElement('footer');
  const wrapper = document.createElement('div');
  const githubLink = document.createElement('a');
  const rssLink = document.createElement('a');

  footer.classList.add('footer');
  wrapper.classList.add('wrapper');
  wrapper.classList.add('footer__wrapper');

  githubLink.classList.add('footer__github-link');
  githubLink.setAttribute('href', 'https://github.com/kris-vadi/');
  githubLink.innerText = '© kris-vadi';

  rssLink.classList.add('footer__rss-link');
  rssLink.setAttribute('href', 'https://rs.school/');

  footer.appendChild(wrapper);
  wrapper.appendChild(githubLink);
  wrapper.appendChild(rssLink);

  return footer;
}
