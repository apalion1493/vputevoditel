$('.vputevoditel-resorts__housing-list').slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 668,
            settings: {
                slidesToShow: 1,
                arrows: true,
                dots: false,
                slidesToScroll: 1
            }
        }
    ]
});

$('.internal-vputevoditel-page__housing-list').slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 668,
            settings: {
                slidesToShow: 1,
                arrows: true,
                dots: false,
                slidesToScroll: 1
            }
        }
    ]
});


$(document).ready(function(){
    $('.internal-vputevoditel-page__other-block').click(function () {
        $(".left-block-menu").toggleClass('active');
    });
});

$(document).ready(function(){
    $('.left-block-menu__hollow-block').click(function () {
        $(".left-block-menu").removeClass('active');
    });
});

$(document).ready(function(){
    $('.internal-vputevoditel-page__other-btn').click(function () {
        $(".internal-vputevoditel-page__other-block").toggleClass('color-orange');
        $(".internal-vputevoditel-page__other-btn-span").toggleClass('color-orange');
    });
});

$(document).ready(function(){
    $('.left-block-menu__hollow-block').click(function () {
        $(".internal-vputevoditel-page__other-btn-span").removeClass('color-orange');
        $(".internal-vputevoditel-page__other-block").removeClass('color-orange');
    });
});


$(function() {
    $('.menu span').click(function() {
        $(this).siblings(".menu ul").toggle();
        $(this).toggleClass('red');
    });
});

$(document).ready(function(){
    $('.left-block-menu__section-menu').click(function () {
        $(this).toggleClass('active');
    });
});

$(document).ready(function(){
    $('.accordion-title').click(function () {
        $(this).prev().toggleClass('active');
    });
});

// $(document).ready(function(){
//     $('.left-block-menu__section-menu').click(function () {
//         $(this).children().first().toggleClass('active');
//     });
// });
//
// $('.left-block-menu__section-icon').click(clickPrev);
//
// function clickPrev(){
//     $('.accordion-title').trigger('click');
// }


(function(){
    var d = document,
        accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
        setAria,
        setAccordionAria,
        switchAccordion,
        touchSupported = ('ontouchstart' in window),
        pointerSupported = ('pointerdown' in window);

    skipClickDelay = function(e){
        e.preventDefault();
        e.target.click();
    };

    setAriaAttr = function(el, ariaType, newProperty){
        el.setAttribute(ariaType, newProperty);
    };
    setAccordionAria = function(el1, el2, expanded){
        switch(expanded) {
            case "true":
                setAriaAttr(el1, 'aria-expanded', 'true');
                setAriaAttr(el2, 'aria-hidden', 'false');
                break;
            case "false":
                setAriaAttr(el1, 'aria-expanded', 'false');
                setAriaAttr(el2, 'aria-hidden', 'true');
                break;
            default:
                break;
        }
    };
//function
    switchAccordion = function(e) {
        console.log("triggered");
        e.preventDefault();
        var thisAnswer = e.target.parentNode.nextElementSibling;
        var thisQuestion = e.target;
        if(thisAnswer.classList.contains('is-collapsed')) {
            setAccordionAria(thisQuestion, thisAnswer, 'true');
        } else {
            setAccordionAria(thisQuestion, thisAnswer, 'false');
        }
        thisQuestion.classList.toggle('is-collapsed');
        thisQuestion.classList.toggle('is-expanded');
        thisAnswer.classList.toggle('is-collapsed');
        thisAnswer.classList.toggle('is-expanded');

        thisAnswer.classList.toggle('animateIn');
    };
    for (var i=0,len=accordionToggles.length; i<len; i++) {
        if(touchSupported) {
            accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
        }
        if(pointerSupported){
            accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
        }
        accordionToggles[i].addEventListener('click', switchAccordion, false);
    }
})();