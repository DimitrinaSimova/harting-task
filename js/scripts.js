$(document).ready(function() {

    $('.hpp-slider-section').slick({
        infinite: true,
        arrows: false,
        dots: true,
        responsive: true
    });

    $('.main-list-nav .nav-level1 a').on('click', function(e) {
      e.preventDefault();

      $(this).closest("li").find("[class^='sub-list-nav']").slideToggle();

    });

});