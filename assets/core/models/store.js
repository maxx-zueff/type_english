module.exports.DOM = function () {

	return {
		link: document.querySelectorAll('.js-link'),
		toggled: document.querySelectorAll('.js-toggle'),
		option: document.querySelectorAll('.js-option'),
		select: document.querySelectorAll('.js-select'),
		submit: document.querySelectorAll('.js-submit'),
		tip: document.querySelectorAll('.js-tip'),

		menu: document.querySelector('.menu'),
		slogan: document.querySelector('.slogan'),
		slider: document.querySelectorAll('.slider-item'),
		nav: document.querySelectorAll('.slider-navigation--item')
	};
};

module.exports.handlers = [];