$(document).ready(function() {
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").addClass("change");
  });

  // sticky navbar less padding
$(window).scroll(function(){

    let position= $(this).scrollTop();
    if(position>=718){
      $('.navbar').addClass('navbar-bg');
      $('.navbar').addClass('fixed-top');
    }else{
      $('.navbar').removeClass('navbar-bg');
      $('.navbar').removeClass('fixed-top');
    }
  });  
  // back to top
$(window).scroll(function(){

    let position= $(this).scrollTop();
    if(position>=718){
      $('#back-to-top').addClass('scrollTop');
    }else{
      $('#back-to-top').removeClass('scrollTop');
    }
  });  
  // smooth scrolling 
  $('.nav-item a, .header-link, #back-to-top').click(function(link){
    link.preventDefault();
    let target= $(this).attr('href');
    $('html,body').stop().animate({
      scrollTop:$(target).offset().top - 25
    },2500)
  })

  // ripples
  $(".info").ripples({
    dropRadius: 25,
    perturbance: 0.6
  });
  // magnific Pop Up
  $(".parent-container").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
  });
});
