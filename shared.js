const baccdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const buttons = document.querySelectorAll('#plans button');
const modalYes = document.querySelector('.modal__actions a');
const modalRemove = document.querySelector('.modal__actions button');

for (const button of buttons) {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
    baccdrop.style.display = 'block';
  });
}

modalRemove.addEventListener('click', () => {
  modal.style.display = 'none';
  baccdrop.style.display = 'none';
});

modalYes.addEventListener('click', () => {
  modal.style.display = 'none';
  baccdrop.style.display = 'none';
});
