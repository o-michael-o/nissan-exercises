$(document).ready(function() {
  // OWL CAROUSEL
  $(".owl-carousel-hero").owlCarousel({
    loop: true,
    slideSpeed: 4000,
    autoPlay: 4000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navigation: false,

    items: 1,
    itemsDesktop: [1024, 1],
    itemsTablet: [768, 1],
    itemsMobile: [568, 1]
  });

  $(".owl-carousel-promo").owlCarousel({
    items: 4,
    loop: true,
    margin: 2,
    slideSpeed: 3000,

    autoplayTimeout: 3000,

    autoPlay: 4000 * (4 / 3),
    navigation: false,
    rewindSpeed: 100
  });
});
