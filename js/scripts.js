$(document).ready(function() {

    $('.hpp-slider-section').slick({
        infinite: true,
        arrows: false,
        dots: true,
        responsive: true
    });

    $('ul.main-list-nav a').on('click', function(e) {
       e.preventDefault();

       var navID = $(this).attr('data-link');
       $('#' + navID).css('display', 'block');

       //console.log(navID);
       //var  selectorTxt = '.main-wrapper' + '#' + thisData;
       //var  obj = $( selectorTxt );
       //obj.css('display', 'block');
     });

});