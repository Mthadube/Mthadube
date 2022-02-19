(function ($) {
  'use strict';
  /* Preloader JS */
  $(window).on('load', function () {
    if ($('.loader-wrapper').length) {
      $('.loader-wrapper').delay(0).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });
  // -- //
  
  /* Ajax Form Submit */  
  var form = $('.contact__form'),
  message = $('.contact__msg'),
  form_data;

    // Success function
    function done_func(response) {
      message.fadeIn().removeClass('alert-danger').addClass('alert-success');
      message.text(response);
      setTimeout(function () {
        message.fadeOut();
      }, 10000);
      form.find('input:not([type="submit"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
      message.fadeIn().removeClass('alert-success').addClass('alert-success');
      message.text(data.responseText);
      setTimeout(function () { 
        message.fadeOut();
      }, 10000);       
    }
    
    form.submit(function (e) {
      e.preventDefault();
      form_data = $(this).serialize();
      $.ajax({
        type: 'POST',
        url: form.attr('action'),
        data: form_data
      })
      .done(done_func)
      .fail(fail_func);
    });
    
  })(jQuery);

  /* Animation on Nav Click */
  $(document).ready(function (){
    $("#home-btn, #home-btn2").click(function (){
      $('html, body').animate({
        scrollTop: $("#home").offset().top -200
      }, 900);
    });
  });
  $(document).ready(function (){
    $("#services-btn, #services-btn2").click(function (){
      $('html, body').animate({
        scrollTop: $("#services").offset().top -200
      }, 900);
    });
  });
  $(document).ready(function (){
    $("#pricing-btn, #pricing-btn2").click(function (){
      $('html, body').animate({
        scrollTop: $("#pricing").offset().top -200
      }, 900);
    });
  });
  $(document).ready(function (){
    $("#work-btn, #work-btn2").click(function (){
      $('html, body').animate({
        scrollTop: $("#work").offset().top -200
      }, 900);
    });
  });
  $(document).ready(function (){
    $("#about-btn, #about-btn2").click(function (){
      $('html, body').animate({
        scrollTop: $("#about").offset().top -200
      }, 900);
    });
  });
  $(document).ready(function (){
    $("#contact-btn, #contact-btn2, #contact-btn3, #contact-btn4, #contact-btn5, #contact-btn6, #contact-btn7").click(function (){
      $('html, body').animate({
        scrollTop: $("#contact").offset().top -200
      }, 900);
    });
  });
  $(document).ready(function (){
    $("#rain-btn, #rain-btn2").click(function (){
      $('html, body').animate({
        scrollTop: $("#rain").offset().top -200
      }, 900);
    });
  });  
  $(document).ready(function (){
    $("#e-commerce-btn, #e-commerce-btn2").click(function (){
      $('html, body').animate({
        scrollTop: $("#e-commerce").offset().top -200
      }, 900);
    });
  });

  /* text animation on scroll */

  jQuery(function($) {

  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {

    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
    $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
    $animatables.each(function(i) {
     var $animatable = $(this);
     if (($animatable.offset().top + $animatable.height() - 210) < offset) {
      $animatable.removeClass('animatable').addClass('animated');
    }
  });

  };
  
  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

