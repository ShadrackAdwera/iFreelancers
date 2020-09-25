const baccdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const buttons = document.querySelectorAll('#plans button');
const modalYes = document.querySelector('.modal__actions a');
const modalRemove = document.querySelector('.modal__actions button');
const toggleButton = document.querySelector('.toggle-button')
const sideDrawer = document.querySelector('.mobile-nav')
const closeSideNav = document.querySelector('.close-side-nav')

const closeModal = () => {
  modal.style.display = 'none';
  baccdrop.style.display = 'none';
};

const showSideDrawer = () => {
    sideDrawer.style.display = 'block'
}

const closeSideDrawer = () => {
    sideDrawer.style.display = 'none'
}

for (const button of buttons) {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
    baccdrop.style.display = 'block';
  });
}

modal && modalRemove.addEventListener('click', closeModal);

modal && modalYes.addEventListener('click', closeModal);

baccdrop && baccdrop.addEventListener('click', closeModal)

toggleButton.addEventListener('click', showSideDrawer)

closeSideNav.addEventListener('click', closeSideDrawer)


