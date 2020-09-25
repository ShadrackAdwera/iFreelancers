const baccdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const buttons = document.querySelectorAll('#plans button');
const modalYes = document.querySelector('.modal__actions a');
const modalRemove = document.querySelector('.modal__actions button');

const closeModal = () => {
  modal.style.display = 'none';
  baccdrop.style.display = 'none';
};

for (const button of buttons) {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
    baccdrop.style.display = 'block';
  });
}

modalRemove.addEventListener('click', closeModal);

modalYes.addEventListener('click', closeModal);
