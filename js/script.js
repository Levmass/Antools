let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

let body = document.querySelector('body');
if (isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.header__arrow');
    for (let i = 0; i < arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];

        arrow[i].addEventListener('click', function () {
            thisLink.classList.toggle('parent');
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }
} else {
    body.classList.add('mouse');
}

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header__buttons').toggleClass('active');
    });
});

let like = document.querySelectorAll('.like-icon');
for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click', function () {
        like[i].classList.toggle('active');
    });
};

let download = document.querySelectorAll('.download-icon');
for (let i = 0; i < download.length; i++) {
    download[i].addEventListener('click', function () {
        download[i].classList.toggle('active');
    });
};

$(document).ready(function () {
    $('.mostpopulartools__load-more-btn').click(function (event) {
        $('.mostpopulartools__row-2').addClass('active');
        $('.mostpopulartools__load-more-btn').addClass('active');
    });
});

$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
	});
});