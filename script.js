$(document).ready(function() {
    $('nav li a').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target ||
                $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                    .animate({
                        scrollTop: targetOffset
                    }, 1000);
                return false;
            }
        }
    });
});


//change navbar background color

var scrollNav = document.getElementById('navbar');
var scrollNavAll = document.getElementById('navbarScroll');

$(window).ready(function() {
    var scrollY = 0;
    var windowWidth;
    $(window).scroll(function() {
        scrollY = $(this).scrollTop();
        windowWidth = $(this).width();
        if ((scrollY >= 700) && (windowWidth > 750)) {
            $(scrollNavAll).css('background-color', 'rgba(0, 0, 0, 0.7)');
            $(scrollNavAll).css('transition', '0.5s');
            $(scrollNav).css('background-color', 'transparent');
        } else if ((scrollY >= 700) && (windowWidth <= 750)) {
            $(scrollNavAll).css('background-color', 'rgba(0, 0, 0, 0.7)');
            $(scrollNavAll).css('transition', '0.5s');
            $(scrollNav).css('background-color', 'rgba(0, 0, 0, 0.7)');
        } else {
            $(scrollNavAll).css('background-color', 'transparent');
            $(scrollNav).css('background-color', 'transparent');
        };
    });
});