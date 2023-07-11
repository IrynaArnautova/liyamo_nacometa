const selects = document.querySelectorAll('.js_select-btn');
const options = document.querySelectorAll('.js_select-option');

selects.forEach(select => {
	select.addEventListener('click', item => {
		const main = item.target.closest('.js_select');
		main.classList.toggle('active');
	})
})
options.forEach(option => {
	option.addEventListener('click', item => {
		const parentMain = item.target.closest('.js_select');
		parentMain.classList.remove('active');
		const text = parentMain.querySelector('.js_select-btn .base_dropdown-main-txt');
		text.innerHTML = item.target.innerHTML;
	})
})

const burger = document.querySelector('.header_js-burger');
const nav = document.querySelector('.header_nav')
const logo = document.querySelector('.header_logo')
const header = document.querySelector('.header_block')
const lang = document.querySelector('.base_dropdown')
burger.addEventListener('click', () => {
	burger.classList.toggle('header_burger-active')
	nav.classList.toggle('active')
	logo.classList.toggle('active-logo')
	header.classList.toggle('header-active')
	lang.classList.toggle('base_dropdown-active')
});

const swiper = new Swiper('.swiper', {
	loop: true,
	slidesPerView: 1.33,
	centeredSlides: true,
	breakpoints: {
		1200: {
			centeredSlides: false,
			slidesPerView: 3,
		}
	}

});
const swiperConcept = new Swiper('.concept_swiper-info', {
	loop: true,
	slidesPerView: 1.5,
});

const swiperReviews = new Swiper('.concept_swiper-reviews', {
	loop: true,
	slidesPerView: 1,
	centeredSlides:true,
	navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
		clickable: true,
    },
	breakpoints: {
		1200: {
			slidesPerView: 3.15,
		}
	}

});
const swiperVideo = new Swiper('.concept_video', {
	loop: true,
	slidesPerView: 2,
	centeredSlides:true,
	navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
	breakpoints: {
		1200: {
			slidesPerView: 4,
		}
	}

});