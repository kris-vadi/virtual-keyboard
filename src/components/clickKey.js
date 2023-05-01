export default function clickKey(keyCode) {
  const text = document.querySelector('.textarea');
  const button = document.querySelector(`.${keyCode}`);

  const specialButtons = ['Backspace', 'Tab', 'CapsLock', 'Enter', 'Del', 'Shift', 'Ctrl', 'Alt'];

  if (!specialButtons.includes(button.innerHTML)) {
    text.focus();
    text.setRangeText(button.innerHTML, text.selectionStart, text.selectionEnd, 'end');
  }

  switch (keyCode) {
    case 'Delete':
      text.setRangeText('', text.selectionStart, text.selectionEnd + 1);
      break;
    case 'Backspace':
      text.setRangeText('', text.selectionStart - 1, text.selectionEnd);
      break;
    case 'Enter':
      text.setRangeText('\n', text.selectionStart, text.selectionEnd, 'end');
      break;
    case 'Tab':
      text.setRangeText('\t', text.selectionStart, text.selectionEnd, 'end');
      break;
    default:
      break;
  }
}
