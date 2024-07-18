const popupBG = document.querySelector('.popup-bg');
const popup = document.querySelector('.popup');

const openPopupBtn = document.querySelector('.btn__open');
const closePopupBtn = document.querySelector('.btn__close');

openPopupBtn.addEventListener('click', (event) => {
    event.preventDefault();
    popupBG.classList.add('active')
    popup.classList.add('active')
})

closePopupBtn.addEventListener('click', (event) => {
    event.preventDefault();
    popupBG.classList.remove('active')
    popup.classList.remove('active')

    const form = document.getElementById('form');
    form.reset();
})

document.addEventListener('click', (event) => {
    if (event.target === popupBG) {
        popupBG.classList.remove('active')
        popup.classList.remove('active')
    }
})