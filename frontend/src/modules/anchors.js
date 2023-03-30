export class Anchor {
  constructor(domElement) {   
    domElement.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = domElement.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    });
  }
}