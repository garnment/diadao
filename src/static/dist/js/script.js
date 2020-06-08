"use strict";
function _typeof(n) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
        return typeof n
    } : function (n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    })(n)
}
!function (i) {
    var t = {};

    function e(n) {
        if (t[n])return t[n].exports;
        var r = t[n] = {i: n, l: !1, exports: {}};
        return i[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }

    e.m = i, e.c = t, e.d = function (n, r, i) {
        e.o(n, r) || Object.defineProperty(n, r, {enumerable: !0, get: i})
    }, e.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(n, "__esModule", {value: !0})
    }, e.t = function (r, n) {
        if (1 & n && (r = e(r)), 8 & n)return r;
        if (4 & n && "object" === _typeof(r) && r && r.__esModule)return r;
        var i = Object.create(null);
        if (e.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: r
            }), 2 & n && "string" != typeof r)for (var t in r)e.d(i, t, function (n) {
            return r[n]
        }.bind(null, t));
        return i
    }, e.n = function (n) {
        var r = n && n.__esModule ? function () {
            return n.default
        } : function () {
            return n
        };
        return e.d(r, "a", r), r
    }, e.o = function (n, r) {
        return Object.prototype.hasOwnProperty.call(n, r)
    }, e.p = "", e(e.s = "./src/static/js/script.js")
}({
    "./src/static/js/script.js": function srcStaticJsScriptJs(module, exports) {
        eval('(function ($) {\r\n\r\n    var mainNavHeight;\r\n\r\n    var r1;\r\n    var ro1;\r\n    var rod1;\r\n    var ro1Width;\r\n\r\n    var r3;\r\n    var ro3;\r\n    var rod3;\r\n    var ro3Width;\r\n\r\n    /** Create autoslide */\r\n    var autoSlide = null;\r\n\r\n    $.createAutoSlide = function () {\r\n        autoSlide = setInterval(function () {\r\n            $.slide();\r\n        }, 3000);\r\n    };\r\n\r\n    $.deleteAutoSlide = function () {\r\n        clearInterval(autoSlide);\r\n        autoSlide = null;\r\n    };\r\n\r\n\r\n    /** Loading images */\r\n    $.fn.imgLoad = function (callback) {\r\n        return this.each(function () {\r\n            if (callback) {\r\n                if (this.complete || $(this).height() > 0) {\r\n                    callback.apply(this);\r\n                }\r\n                else {\r\n                    $(this).on(\'load\', function () {\r\n                        callback.apply(this);\r\n                    });\r\n                }\r\n            }\r\n        });\r\n    };\r\n\r\n    /** SCROLLING */\r\n    $.scrolling = function () {\r\n\r\n        $(window).scroll(function () {\r\n            var scrollTop = $(window).scrollTop();\r\n\r\n            // Ombrages sur la navbar et le container\r\n            if (scrollTop > mainNavHeight) {\r\n                $("#mainNav").addClass(\'scrolling\');\r\n                $("#mainContainer").addClass(\'scrolling\');\r\n            } else {\r\n                $("#mainNav").removeClass(\'scrolling\');\r\n                $("#mainContainer").removeClass(\'scrolling\');\r\n            }\r\n\r\n            // Parallaxe\r\n            var width1 = parseInt(ro1Width + (scrollTop / 7));\r\n            var width3 = parseInt(scrollTop / 10);\r\n\r\n            rod1.css({width: width1});\r\n            rod3.css({top: -width3}).css({left: -width3});\r\n        });\r\n    };\r\n\r\n\r\n    /** Init scrolling */\r\n    $.initScrolling = function () {\r\n\r\n        var nbImg = $("#ambiances img").length;\r\n        var nbLoaded = 0;\r\n\r\n        $("#ambiances img").imgLoad(function () {\r\n            nbLoaded++;\r\n            $(this).fadeTo("fast", 1);\r\n\r\n            if (nbLoaded === nbImg) {\r\n                mainNavHeight = $("#mainNav").height();\r\n                r1 = $(\'#room1\');\r\n                ro1 = $(\'#room1 .overflow\');\r\n                rod1 = $(\'#room1 .overflow div\');\r\n                ro1Width = parseInt(ro1.width());\r\n\r\n                r3 = $(\'#room3\');\r\n                ro3 = $(\'#room3 .overflow\');\r\n                rod3 = $(\'#room3 .overflow div\');\r\n                ro3Width = parseInt(r3.width());\r\n\r\n                ro1.css({width: ro1Width});\r\n                ro1.css({height: ro1.height()});\r\n\r\n                ro3.css({width: ro3Width});\r\n                ro3.css({height: ro3.height()});\r\n\r\n                $.scrolling();\r\n            }\r\n\r\n        });\r\n\r\n    };\r\n\r\n\r\n    /** Slideshow */\r\n    $.slideShow = function () {\r\n\r\n        $("#btSlideContainer #prev").bind(\'click\', function () {\r\n            $.deleteAutoSlide();\r\n            $.slide(this);\r\n        });\r\n\r\n        $("#btSlideContainer #next").bind(\'click\', function () {\r\n            $.deleteAutoSlide();\r\n            $.slide(this);\r\n        });\r\n\r\n        /** Lancement auto par défaut */\r\n        $.createAutoSlide();\r\n\r\n    };\r\n\r\n\r\n    $.slide = function (bt = \'next\') {\r\n        var width = $("#imgSlide :first").width();\r\n        var imgSlide = $("#imgSlide");\r\n        var textSlide = $(\'#textSlide\');\r\n        textSlide.fadeOut(150);\r\n\r\n\r\n        if (bt.id === \'prev\') {\r\n            imgSlide.animate({marginLeft: -width}, 800, function () {\r\n                $(this).css({marginLeft: 0}).find("div:last").after($(this).find("div:first"));\r\n                textSlide.fadeIn(300);\r\n            })\r\n        } else {\r\n            imgSlide.css({marginLeft: -width}).find("div:first").before((imgSlide).find("div:last"));\r\n            imgSlide.animate({marginLeft: 0}, 800, function () {\r\n                textSlide.fadeIn(300);\r\n            });\r\n        }\r\n\r\n    };\r\n\r\n\r\n    /** Loading slideshow SLIDESHOW */\r\n    var nbSlides = $("#imgSlide img").length;\r\n    var nbLoaded = 0;\r\n\r\n    $.loadingSlide = function () {\r\n        $("#imgSlide img").imgLoad(function () {\r\n            nbLoaded++;\r\n            if (nbLoaded == nbSlides) {\r\n                $("#loader").hide();\r\n                $("#slideContainer").removeClass(\'loading\');\r\n                $.slideShow();\r\n            }\r\n        });\r\n    };\r\n\r\n\r\n}(jQuery));\r\n\r\n\r\n$(document).ready(function () {\r\n    $.loadingSlide();\r\n    $.initScrolling();\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/static/js/script.js?')
    }
});