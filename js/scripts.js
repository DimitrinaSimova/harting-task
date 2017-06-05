//$( document ).ready(function() {
    // var init = function() {
    //     sliderInit();
    // }

    // var sliderInit = function() {
    //     var carousel = $('.slider');

    //     $(carousel).slick({
    //         responsive: true,
    //         infinite: true,
    //         draggable: false,
    //         arrows: true,
    //         dots: false,
    //         responsive: [
    //         {
    //           breakpoint: 767,
    //           settings: {
    //             arrows: false,
    //             dots: true
    //           }
    //         }
    //       ]
    //     });
    // };
//});

$(document).ready(function() {

    $('.hpp-slider-section').slick({
        infinite: true,
        arrows: false,
        dots: true,
        responsive: true
    });

    $('.main-list li a').on('click', function(e) {
       e.preventDefault();

       var thisData = $(this).attr('data-link');
       console.log(thisData);
       var  selectorTxt = '.main-wrapper' + '#' + thisData;
       var  obj = $( selectorTxt );
       obj.css('display', 'block');
     });

});