let elNavList = document.querySelector(`.js-header-list`);
let elHeaderBtn = document.querySelector(`.js-open-header`);

elHeaderBtn.addEventListener(`click`, evt => {
  elNavList.classList.toggle(`header-nav__list--open`);
})
