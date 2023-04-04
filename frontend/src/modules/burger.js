export class Burger {
  constructor(domElement) {
    domElement.addEventListener('click', (el) => {
      document.querySelectorAll(`.${domElement.dataset.target}`).forEach((menuElement) => {
        menuElement.classList.toggle('menu_visible');
      });
    });

  }
}