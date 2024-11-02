document.addEventListener('DOMContentLoaded', function () {
	const buttons = document.querySelectorAll('.hero-change__btn')

	buttons.forEach(btn => {
		btn.addEventListener('click', () => {
			buttons.forEach(otherBtn => {
				otherBtn.classList.remove('active')
			})
			btn.classList.add('active')
		})
	})

	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'vertical',
		loop: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	})
})
