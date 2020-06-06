(function ($) {

    $.scrolling = function () {

        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            var mainNavHeight = $("#mainNav").height();

            // Ombrage sur la navbar
            if (scrollTop > mainNavHeight) {
                $("#mainNav").addClass('scrolling');
            } else {
                $("#mainNav").removeClass('scrolling');
            }


        });

    };

}(jQuery));


$(document).ready(function () {
    $.scrolling();
});

