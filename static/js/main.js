//init Owl carousel

$(document).ready(function () {
    $("#owl-demo").owlCarousel({

        autoplay: 1000, //Set AutoPlay to 3 seconds
        items: 2,
        dots: false,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2]
    });
});