 // video popup form youtube
$('#popup-youtube').magnificPopup({
  items: {
       src: 'https://www.youtube.com/watch?v=CUqg14FuPqc&t=34s'
     },
  type: 'iframe',
  iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', 
        patterns: {
            youtube: {
                index: 'youtube.com/', 
                id: 'v=', 
                src: '//www.youtube.com/embed/%id%?autoplay=1' 
            }
         },
         srcAction: 'iframe_src', 
     }
});


/** Screenshots **/
$('#myCarousel').carousel({
    interval: 5000
})

$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  }
  else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});


/** Testimonial **/
$(document).ready(function() {
  $("#owl-demo-testimonial").owlCarousel({
    autoPlay: 5000,
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1]
  });

});


/** Partner **/
$(document).ready(function() {
     
  var owl = $("#owl-demo-partner");

      owl.owlCarousel({
       
        itemsCustom : [
          [0, 2],
          [450, 2],
          [600, 3],
          [700, 3],
          [1000, 4],
          [1200, 4],
          [1400, 5],
          [1600, 6]
        ],
      navigation : false
 
  });

});


/** Counter **/
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


/** Preloader **/
$(window).on('load',function(){
   var preloader=$('#preloader div');
   preloader.fadeOut();
   $('#preloader').delay(350).fadeOut('slow');
   $('body').delay(350).css({'overflow':'visible'});
});