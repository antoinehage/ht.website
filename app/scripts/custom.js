jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop();

    if (scroll >= 20 && jQuery(window).width() > 1010 ) {
        jQuery(".navbar").addClass("scrolling");

    } else {
        jQuery(".navbar").removeClass("scrolling");
    }
});

