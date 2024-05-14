
/*  aside menu  overlay blur  */


const sideMenu = document.querySelector('.aside-menu');
const overlay = document.querySelector('.aside-menu__overlay');
const blur = document.querySelector('.aside-menu__blur');
const btnBurger = document.querySelector('.header__burger-btn');
const btnClose = document.querySelector('.aside-menu__btn-close');
const styleHiddenAside = 'aside-menu--hidden';
const styleHiddenAsideBlur = 'aside-menu__blur--hidden';
const styleHiddenAsideOverlay = 'aside-menu__overlay--hidden';

btnBurger.addEventListener('click', () => {
    sideMenu.classList.remove(styleHiddenAside);
    blur.classList.remove(styleHiddenAsideBlur);
    overlay.classList.remove(styleHiddenAsideOverlay);
});

btnClose.addEventListener('click', () => {
    sideMenu.classList.add(styleHiddenAside);
    blur.classList.add(styleHiddenAsideBlur);
    overlay.classList.add(styleHiddenAsideOverlay);
});

overlay.addEventListener('click', () => {
    sideMenu.classList.add(styleHiddenAside);
    blur.classList.add(styleHiddenAsideBlur);
    overlay.classList.add(styleHiddenAsideOverlay);
});


/* modal call */

const modalCall = document.querySelector('.modal-call');
const modalCallOverlay = document.querySelector('.modal-call__overlay');
const btnCloseCall = document.querySelector('.modal-call__btn-close');
const btnCallHeader = document.querySelector('.header__tel-btn');
const btnCallAside = document.querySelector('.aside-menu__btn-call');
const styleCallOverlayClose = 'modal-call__overlay--close';
const styleCallOverlayOpen = 'modal-call__overlay--open';
const styleCallClose = 'modal-call--close';
const styleCallOpen = 'modal-call--open';

btnCallHeader.addEventListener('click', () => {
    modalCall.classList.add(styleCallOpen);
    modalCall.classList.remove(styleCallClose);
    modalCallOverlay.classList.add(styleCallOverlayOpen);
    modalCallOverlay.classList.remove(styleCallOverlayClose);
});

btnCallAside.addEventListener('click', () => {
    modalCall.classList.add(styleCallOpen);
    modalCall.classList.remove(styleCallClose);
    modalCallOverlay.classList.add(styleCallOverlayOpen);
    modalCallOverlay.classList.remove(styleCallOverlayClose);
});

btnCloseCall.addEventListener('click', () => {
    modalCall.classList.remove(styleCallOpen);
    modalCall.classList.add(styleCallClose);
    modalCallOverlay.classList.remove(styleCallOverlayOpen);
    modalCallOverlay.classList.add(styleCallOverlayClose);
});

modalCallOverlay.addEventListener('click', () => {
    modalCall.classList.remove(styleCallOpen);
    modalCall.classList.add(styleCallClose);
    modalCallOverlay.classList.remove(styleCallOverlayOpen);
    modalCallOverlay.classList.add(styleCallOverlayClose);
});

/* modal feedback */

const modalFeedback = document.querySelector('.modal-feedback');
const modalFeedbackOverlay = document.querySelector('.modal-feedback__overlay');
const btnCloseFeedback = document.querySelector('.modal-feedback__btn-close');
const btnFeedbackHeader = document.querySelector('.header__chat-btn');
const btnFeedbackAside = document.querySelector('.aside-menu__btn-chat');
const styleFeedbackOverlayClose = 'modal-feedback__overlay--close';
const styleFeedbackOverlayOpen = 'modal-feedback__overlay--open';
const styleFeedbackClose = 'modal-feedback--close';
const styleFeedbackOpen = 'modal-feedback--open';

btnFeedbackHeader.addEventListener('click', () => {
    modalFeedback.classList.add(styleFeedbackOpen);
    modalFeedback.classList.remove(styleFeedbackClose);
    modalFeedbackOverlay.classList.add(styleFeedbackOverlayOpen);
    modalFeedbackOverlay.classList.remove(styleFeedbackOverlayClose);
});

btnFeedbackAside.addEventListener('click', () => {
    modalFeedback.classList.add(styleFeedbackOpen);
    modalFeedback.classList.remove(styleFeedbackClose);
    modalFeedbackOverlay.classList.add(styleFeedbackOverlayOpen);
    modalFeedbackOverlay.classList.remove(styleFeedbackOverlayClose);
});

modalFeedbackOverlay.addEventListener('click', () => {
    modalFeedback.classList.remove(styleFeedbackOpen);
    modalFeedback.classList.add(styleFeedbackClose);
    modalFeedbackOverlay.classList.remove(styleFeedbackOverlayOpen);
    modalFeedbackOverlay.classList.add(styleFeedbackOverlayClose);
});

btnCloseFeedback.addEventListener('click', () => {
    modalFeedback.classList.remove(styleFeedbackOpen);
    modalFeedback.classList.add(styleFeedbackClose);
    modalFeedbackOverlay.classList.remove(styleFeedbackOverlayOpen);
    modalFeedbackOverlay.classList.add(styleFeedbackOverlayClose);
});


/* Info block */

const btnInfo = document.querySelector('.info-block__btn');
const infoText = document.querySelector('.info-block__text');
const btnInfoArrow = document.querySelector('.info-block__btn-arrow');
const btnInfoText = document.querySelector('.info-block__btn').children[1];
console.log(btnInfoText.textContent);
btnInfo.addEventListener('click', function (evt){
    evt.preventDefault();
    infoText.classList.toggle('info-block__text--closed')
    infoText.classList.toggle('info-block__text--open')
    console.log(infoText.classList.contains('info-block__text--open'));
    if (infoText.classList.contains('info-block__text--open')) {
        btnInfoArrow.style.transform = 'rotate(-180deg)';
        btnInfoText.textContent = 'Скрыть';
    } else {
        btnInfoArrow.style.transform = 'unset';
        btnInfoText.textContent = 'Показать еще';
    }
});



/* Repair block */


const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesOffsetBefore: 16,

    observer: true,
    observerParents: true,
    observerSlideChildren: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

const swiperSecond = new Swiper('.swiper-tech', {

    slideClass: 'tech-block__slide',
    paginationClass: 'tech-block__pagination',
   
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesOffsetBefore: 16,

    observer: true,
    observerParents: true,
    observerSlideChildren: true,

    mausewheel: {
        sensitivity: 1,
    },

    speed: 800,

    pagination: {
        el: '.tech-block__pagination',
        clickable: true,
    },
});


const btnRepair = document.querySelector('.repair-block__btn');
const repairContent = document.querySelector('.repair-block__slide');
const btnRepairArrow = document.querySelector('.repair-block__btn-arrow');
const btnRepairText = document.querySelector('.repair-block__btn').children[1];

btnRepair.addEventListener('click', function (evt){
    evt.preventDefault();
    repairContent.classList.toggle('repair-block__slide--closed')
    repairContent.classList.toggle('repair-block__slide--open')

    if (repairContent.classList.contains('repair-block__slide--open')) {
        btnRepairArrow.style.transform = 'rotate(-180deg)';
        btnRepairText.textContent = 'Скрыть';
    } else {
        btnRepairArrow.style.transform = 'unset';
        btnRepairText.textContent = 'Показать еще';
    }
});


/* Tech block */

const btnTech = document.querySelector('.table-tech__btn');
const techContent = document.querySelector('.table-tech');
const btnTechArrow = document.querySelector('.table-tech__btn-arrow');
const btnTechText = document.querySelector('.table-tech__btn').children[1];

btnTech.addEventListener('click', function (evt){
    evt.preventDefault();
    techContent.classList.toggle('table-tech__block--closed')
    techContent.classList.toggle('table-tech__block--open')

    if (techContent.classList.contains('table-tech__block--open')) {
        btnTechArrow.style.transform = 'rotate(-180deg)';
        btnTechText.textContent = 'Скрыть';
    } else {
        btnTechArrow.style.transform = 'unset';
        btnTechText.textContent = 'Показать еще';
    }
});

/* Service block */

const swiperServiceBlock = new Swiper('.swiper-service', {

    slideClass: 'service-block__slide',
    paginationClass: 'service-block__pagination',
   
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesOffsetBefore: 16,

    observer: true,
    observerParents: true,
    observerSlideChildren: true,

    mausewheel: {
        sensitivity: 1,
    },

    speed: 800,

    pagination: {
        el: '.service-block__pagination',
        clickable: true,
    },
});