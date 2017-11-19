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

var scrollNav = $('#navbar');
var scrollNavAll = $('#navbarScroll');

$(window).ready(function() {
    var scrollY = 0;
    $(window).scroll(function() {
        scrollY = $(this).scrollTop();
        if (scrollY >= 700) {
            $(scrollNav).addClass('scroll__nav');
            $(scrollNavAll).addClass('scroll__navall');
        } else {
            $(scrollNav).removeClass('scroll__nav');
            $(scrollNavAll).removeClass('scroll__navall');
        }
    })
});

//click menu
var clickLink = $(".nav li");
var hideMenu = $(".collapse, .in");
console.log(clickLink);
console.log(hideMenu);

$(clickLink).on('click', function() {
    if (clickLink === click) {
        $(hideMenu).css('visibility', 'hidden');
    }
});