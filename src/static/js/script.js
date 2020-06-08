(function ($) {

    var mainNavHeight;

    var r1;
    var ro1;
    var rod1;
    var ro1Width;

    var r3;
    var ro3;
    var rod3;
    var ro3Width;

    /** Create autoslide */
    var autoSlide = null;

    $.createAutoSlide = function () {
        autoSlide = setInterval(function () {
            $.slide();
        }, 3000);
    };

    $.deleteAutoSlide = function () {
        clearInterval(autoSlide);
        autoSlide = null;
    };


    /** Loading images */
    $.fn.imgLoad = function (callback) {
        return this.each(function () {
            if (callback) {
                if (this.complete || $(this).height() > 0) {
                    callback.apply(this);
                }
                else {
                    $(this).on('load', function () {
                        callback.apply(this);
                    });
                }
            }
        });
    };

    /** SCROLLING */
    $.scrolling = function () {

        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();

            // Ombrages sur la navbar et le container
            if (scrollTop > mainNavHeight) {
                $("#mainNav").addClass('scrolling');
                $("#mainContainer").addClass('scrolling');
            } else {
                $("#mainNav").removeClass('scrolling');
                $("#mainContainer").removeClass('scrolling');
            }

            // Parallaxe
            var width1 = parseInt(ro1Width + (scrollTop / 7));
            var width3 = parseInt(scrollTop / 10);

            rod1.css({width: width1});
            rod3.css({top: -width3}).css({left: -width3});
        });
    };


    /** Init scrolling */
    $.initScrolling = function () {

        var nbImg = $("#ambiances img").length;
        var nbLoaded = 0;

        $("#ambiances img").imgLoad(function () {
            nbLoaded++;
            $(this).fadeTo("fast", 1);

            if (nbLoaded === nbImg) {
                mainNavHeight = $("#mainNav").height();
                r1 = $('#room1');
                ro1 = $('#room1 .overflow');
                rod1 = $('#room1 .overflow div');
                ro1Width = parseInt(ro1.width());

                r3 = $('#room3');
                ro3 = $('#room3 .overflow');
                rod3 = $('#room3 .overflow div');
                ro3Width = parseInt(r3.width());

                ro1.css({width: ro1Width});
                ro1.css({height: ro1.height()});

                ro3.css({width: ro3Width});
                ro3.css({height: ro3.height()});

                $.scrolling();
            }

        });

    };


    /** Slideshow */
    $.slideShow = function () {

        $("#btSlideContainer #prev").bind('click', function () {
            $.deleteAutoSlide();
            $.slide(this);
        });

        $("#btSlideContainer #next").bind('click', function () {
            $.deleteAutoSlide();
            $.slide(this);
        });

        /** Lancement auto par défaut */
        $.createAutoSlide();

    };


    $.slide = function (bt = 'next') {
        var width = $("#imgSlide :first").width();
        var imgSlide = $("#imgSlide");
        var textSlide = $('#textSlide');
        textSlide.fadeOut(150);


        if (bt.id === 'prev') {
            imgSlide.animate({marginLeft: -width}, 800, function () {
                $(this).css({marginLeft: 0}).find("div:last").after($(this).find("div:first"));
                textSlide.fadeIn(300);
            })
        } else {
            imgSlide.css({marginLeft: -width}).find("div:first").before((imgSlide).find("div:last"));
            imgSlide.animate({marginLeft: 0}, 800, function () {
                textSlide.fadeIn(300);
            });
        }

    };


    /** Loading slideshow SLIDESHOW */
    var nbSlides = $("#imgSlide img").length;
    var nbLoaded = 0;

    $.loadingSlide = function () {
        $("#imgSlide img").imgLoad(function () {
            nbLoaded++;
            if (nbLoaded == nbSlides) {
                $("#loader").hide();
                $("#slideContainer").removeClass('loading');
                $.slideShow();
            }
        });
    };


}(jQuery));


$(document).ready(function () {
    $.loadingSlide();
    $.initScrolling();
});

