$('.tab-menu li a').on('click', function () {
    var target = $(this).attr('data-rel');
    $('.tab-menu li a').removeClass('active');
    $(this).addClass('active');
    $("#" + target).fadeIn('slow').siblings(".tab-box").hide();
    return false;
});


$(document).ready(function () {
    $('.icon__bars').click(function () {
        $('.nav-bar__list').slideToggle()
    });


    // $(window).scroll(function () {
    //     var sc = $(this).scrollTop();
    //     if (sc > 50) {
    //         $(".main-header").addClass("sticky");
    //     } else {
    //         $(".main-header").removeClass("sticky");
    //     }
    // });

});


const header__icon = document.querySelector(".header__icon");
const navLinks = document.querySelector(".nav-bar__list");
const links = document.querySelectorAll(".nav-bar__list li");

header__icon.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

jQuery(function ($) {

    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function () { 

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');

        // Check all animatables and animate them if necessary
        $animatables.each(function (i) {
            var $animatable = $(this);

            // Items that are "above the fold"
            if (($animatable.offset().top + $animatable.height() + 50) < offset) {

                // Item previously wasn't marked as "above the fold": mark it now
                if (!$animatable.hasClass('animate-in')) {
                    $animatable.removeClass('animate-out').css('top', $animatable.css('top')).addClass('animate-in');
                }

            }

            // Items that are "below the fold"
            else if (($animatable.offset().top + $animatable.height() + 50) > offset) {

                // Item previously wasn't marked as "below the fold": mark it now
                if ($animatable.hasClass('animate-in')) {
                    $animatable.removeClass('animate-in').css('top', $animatable.css('top')).addClass('animate-out');
                }

            }

        });

    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});


//hedear Scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-87px";
    }
    prevScrollpos = currentScrollPos;
}

