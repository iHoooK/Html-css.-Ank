/*==================================
Template Name: UAPP 
Description: UAPP is a HTML5 App Landing Page for Business
Author: Mohammad Saifur Rahman
Version: 1.0
====================================*/ 

/* INDEX
--------------------------------------
1. Client Carousel
2. Magnific Popup
3. Testimonial Carousel
4. BOTTOM SCROLL To TOP BUTTON
5. Smooth Scroll Down
6. Sticky Menu
7. Mobile Menu
8. Preloader
---------------------------------------- */

;(function($){
	"use strict";
	
	jQuery(document).ready(function($){

        /*==============================
          Client Carousel
        ================================*/
        var owl = $('.client-list').owlCarousel({
            loop    :true,
            margin  :15,
            nav     :false,
            autoplay:true,
            dots: false,
            responsive: {
                0: {
                    items: 2,
                },
                480: {
                    items: 3,
                },
                768:{
                    items: 4
                },
            }
        }); 
        /*==============================
          Magnific Popup
        ================================*/
        var $mgpopup = $('.play-btn');
        $mgpopup.magnificPopup({
            type:'video'
        });
        
        /*==============================
          Testimonial Carousel
        ================================*/
        var owl = $('.testimonial-list').owlCarousel({
            loop    : true,
            margin  : 10,
            nav     : false,
            autoplay: false,
            dots: false,
            items: 2,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                768:{
                    items: 2
                },
            }
        }); 
        
        /*==============================
            BOTTOM SCROLL TOP BUTTON
        ================================*/ 
        var scrollTop = $(".scrollTop");
        $(scrollTop).on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        /*==============================
            Smooth Scroll Down
        ================================*/ 
        $(".mainmenu li a, .arrow-box a").on('click', function(event) {
            if (this.hash !== "") {
              event.preventDefault();

              var hash = this.hash;

              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){
                window.location.hash = hash;
              });
            }
        });
        /*==============================
            Sticky Menu
        ================================*/ 
        var windows = $(window);
        var sticky = $('.sticky-header');

        windows.on('scroll', function() {
            var scroll = windows.scrollTop();
            if (scroll < 150) {
                sticky.removeClass('is-sticky');
            }else{
                sticky.addClass('is-sticky');
            }
        });
        /*==============================
            Mobile Menu
        ================================*/ 
        jQuery('.mainmenu').meanmenu({
            meanScreenWidth: '991',
            meanMenuContainer: '.mobile-menu',
            meanRevealPosition: 'right'
        });



	});
	
	
        /*==============================
            Preloader
        ================================*/ 
        jQuery(window).on('load', function() { 
          $('#status').fadeOut(); 
          $('#preloader').delay(350).fadeOut('slow'); 
          $('body').delay(350).css({'overflow':'visible'});
        })
	
}(jQuery));
