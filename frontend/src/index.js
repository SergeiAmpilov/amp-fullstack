import '../style/index.css';
import { Anchor } from './modules/anchors';
import { Burger } from './modules/burger';
import { windowScrollHandler } from './modules/windowScrollHandler';

const porfolioItemList = document.querySelectorAll('.portfolio__item');

const handleHover = (evt) => {
  const contentElement = evt.target.querySelector('.portfolio__item-content');

  if (contentElement 
    && contentElement.classList 
    && !contentElement.classList.contains('portfolio__item-content_visible')) {
      
      porfolioItemList.forEach((el) => {
        const contElPrevious = el.querySelector('.portfolio__item-content');
        if (contElPrevious && contElPrevious.classList) {
          contElPrevious.classList.remove('portfolio__item-content_visible');
        }
      });

      contentElement.classList.add('portfolio__item-content_visible');
    }  
}

porfolioItemList.forEach( (element) => {
  element.addEventListener('mouseover', handleHover);
})


/* popup */

const popupElement = document.querySelector('.popup');
const imgInPopup = popupElement.querySelector('.popup__img');


const openPopup = ({ src, alt }) => {
  imgInPopup.src = src;
  imgInPopup.alt = alt;
  popupElement.classList.remove('popup__hidden');
}

const closePopup = () => {
  imgInPopup.src = '';
  imgInPopup.alt = '';
  document.querySelector('.popup').classList.add('popup__hidden');
}

const handleOpenPopup = (evt) => {
  evt.preventDefault();
  const { src, alt } = evt.target;
  document.querySelector('body').classList.add('stop-scrolling');
  openPopup({ src, alt });
}

const handleClosePopup = (evt) => {
  document.querySelector('body').classList.remove('stop-scrolling');
  closePopup();
}

document.querySelectorAll('.sertificates__list_img').forEach( el => el.addEventListener('click', handleOpenPopup) );
document.querySelectorAll('.popup__container').forEach( el => el.addEventListener('click', handleClosePopup) );

/* anchors */
document.querySelectorAll('.link__anchor').forEach((el) => { new Anchor(el) });

/* burger menu */
document.querySelectorAll('.nav__burger').forEach((el) => { new Burger(el) });

/* scroll to top */
window.addEventListener('scroll', windowScrollHandler);
