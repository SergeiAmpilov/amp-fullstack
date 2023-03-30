export class Burger {
  constructor(domElement) {
    domElement.addEventListener('click', (el) => {
      // console.log('click on burger', domElement.dataset.target);
      document.querySelectorAll(`.${domElement.dataset.target}`).forEach((menuElement) => {
        menuElement.classList.toggle('menu_visible');
      });
    });

  }
}