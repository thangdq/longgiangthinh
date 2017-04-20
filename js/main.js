$(document).ready(function() {
  
  if($('.banner-container .owl-carousel').length){
    var options = {
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      touchDrag: false,
      autoplay: true,
      autoplayTimeout: 3500,
      items: 1,
      loop: true,
      nav: true,
      navText: ["<i class='icon-chevron-circle-left'></i>","<i class='icon-chevron-circle-right'></i>"]
    }
    var owl_banner = $('.banner-container .owl-carousel').owlCarousel(options);
    owl_banner.trigger('refresh.owl.carousel');
  }
  
  if($('.products-container .owl-carousel').length){
    var options = {
      items: 4,
      loop: true,
	  autoplay: false,
      
      responsive : {
          // breakpoint from 0 up
          0 : {
            autoWidth:true,
            items:1,
          },
          425 : {
            items: 1,
            autoWidth:true
          },
          768 : {
            items: 2,
            autoWidth:true
          },
          992 : {
            items: 3
          },
          1024 : {
            items: 4
          }
      }
    }
    var owl_service = $('.products-container .owl-carousel').owlCarousel(options);
    owl_service.trigger('refresh.owl.carousel');
  }
  
   // Open menu mobile
  $('#btn-open-menu-mobile').click(function() {
    $('.mobile-nav-popup-container').addClass('open');
  });
  
  // Close menu mobile
  $('#btn-close-menu-mobile').click(function() {
    $('.mobile-nav-popup-container').removeClass('open');
  });
 
  $('.sidebar-container .sidebar-title').click(function() {
    var sidebar = $('.sidebar-container');
    if(sidebar.hasClass('open')){
      sidebar.removeClass('open')
    }else{
      sidebar.addClass('open')      
    }
  });
  
});