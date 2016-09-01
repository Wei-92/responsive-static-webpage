/*--=========================================================
    Wei Zhang
    wei.zhang.92@hotmail.com
=========================================================--*/

$(document).ready(function () {
    /* responsive homepage display*/
    function homepageResponsive() {
        var windowsWidth = $(window).width(),
            windowsHeight = $(window).height();
        if (windowsWidth > windowsHeight) {
            $('.introduction , .menu').css({
                width: '50%',
                height: '100%'
            });
        } else {
            $('.introduction , .menu').css({
                width: '100%',
                height: '50%'
            });
        }

        var introWidth = $('.introduction').width(),
            introHeight = $('.introduction').height(),
            bgLeftImage = $('.introduction').find('img');
        if (introWidth > introHeight) {
            bgLeftImage.css({
                width: '100%',
                height: 'auto'
            });
        } else {
            bgLeftImage.css({
                width: 'auto',
                height: '100%'
            });
        }
    }
    $(window).on('load resize', homepageResponsive);

    /* menu click event / effect */
    // Hide Menu and introduction section
    $('.menu > div').on('click', function () {
        var introWidth = $('.introduction').width(),
            menuWidth = $('.menu').width();
        $('.introduction').animate({
            left: '-' + introWidth
        }, 1000, 'easeOutQuart');
        $('.menu').animate({
            left: menuWidth
        }, 1000, 'easeOutQuart', function () {
            $('.home-page').css({
                visibility: 'hidden'
            });
        });
        $('.close-btn').css({
            visibility: 'visible'
        });
    });

    // Show Reletive Page Onclick
    $('.menu div.profile-btn').on('click', function () {
        $('.profile-page').fadeIn(1200);
    });

    $('.menu div.resume-btn').on('click', function () {
        $('.resume-page').fadeIn(1200);
    });

    $('.menu div.portfolio-btn').on('click', function () {
        $('.portfolio-page').fadeIn(1200);
    });

    $('.menu div.contact-btn').on('click', function () {
        $('.contact-page').fadeIn(1200);
    });

    // Close Button, Hide Menu, Show Home Page
    $('.close-btn').on('click', function () {
        $('.home-page').css({
            visibility: 'visible'
        });
        $('.introduction, .menu').animate({
            left: 0
        }, 1000, 'easeOutQuart');
        $('.profile-page, .resume-page, .portfolio-page, .contact-page').fadeOut(800);
        $('.close-btn').css({
            visibility: 'hidden'
        });
    });
});