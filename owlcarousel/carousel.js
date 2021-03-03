$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    items:3,
    autoplay:true,
    margin:20,
    responsive : {
    
    0 : {
        items:2,
        margin:10,
    },
    550 : {
        items:4,
    }
    }
    });
});

    $(".owl-carousel2").owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    items:4,
    autoplay:true,
    responsive : {
    // breakpoint from 0 up
    0 : {
        option1 : value,
        option2 : value,
        
    },
    // breakpoint from 480 up
    480 : {
        option1 : value,
        option2 : value,
        option3: value,
    },
    // breakpoint from 768 up
    768 : {
        option1 : value,
        option2 : value,
        option3 : value,
        option4 : value,
    }
}
    });