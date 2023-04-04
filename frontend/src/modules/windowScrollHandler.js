export const windowScrollHandler = (e) => {
  document
    .querySelector(".button_scroll-top")
    .style
    .display = window.scrollY > 20 ? 'block' : 'none';
}