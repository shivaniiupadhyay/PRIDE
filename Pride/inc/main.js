/*-----------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/  

(function($) {

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
  	$(window).load(function() {

   	// will first fade out the loading animation 
    	$("#status").fadeOut("slow"); 

    	// will fade out the whole DIV that covers the website. 
    	$("#preloader").delay(500).fadeOut("slow").remove();      

  	}) 

  	/*----------------------------------------------------*/
  	/* Backstretch
  	/*----------------------------------------------------*/

  	if($("html").hasClass('ie8')) {
  		$("#hero").backstretch("images/hero-bg.jpg");  	
  		$("#page-title").backstretch("images/hero-bg.jpg");	
  	} 

   /*----------------------------------------------------*/
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('#page-title h1').fitText(1, { minFontSize: '38px', maxFontSize: '54px' });

  	}, 100);


	/*----------------------------------------------------*/
	/* Adjust Primary Navigation Background Opacity
	------------------------------------------------------*/
   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var header = $('#main-header');

	   if ((y > h + 30 ) && ($(window).outerWidth() > 768 ) ) {
	      header.addClass('opaque');
	   }
      else {
         if (y < h + 30) {
            header.removeClass('opaque');
         }
         else {
            header.addClass('opaque');
         }
      }

	});

   /*-----------------------------------------------------*/
	/* Alert Boxes
  	-------------------------------------------------------*/
	$('.alert-box').on('click', '.close', function() {
	  $(this).parent().fadeOut(500);
	});	


   /*-----------------------------------------------------*/
  	/* Mobile Menu
   ------------------------------------------------------ */  
   var menu_icon = $("<span class='menu-icon'></span>");
  	var toggle_button = $("<a>", {                         
                        id: "toggle-btn", 
                        html : "<span class='menu-text'>Menu</span>",
                        title: "Menu",
                        href : "#" } 
                        );
  	var nav_wrap = $('nav#nav-wrap')
  	var nav = $("ul#nav");  
   
   /* if JS is enabled, remove the two a.mobile-btns 
  	and dynamically prepend a.toggle-btn to #nav-wrap */
  	nav_wrap.find('a.mobile-btn').remove(); 
  	toggle_button.append(menu_icon); 
   nav_wrap.prepend(toggle_button); 

  	toggle_button.on("click", function(e) {
   	e.preventDefault();
    	nav.slideToggle("fast");     
  	});

  	if (toggle_button.is(':visible')) nav.addClass('mobile');
  	$(window).resize(function() {
   	if (toggle_button.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('ul#nav li a').on("click", function() {      
   	if (nav.hasClass('mobile')) nav.fadeOut('fast');      
  	});


  	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});


  	/*----------------------------------------------------*/
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------*/
	var sections = $("section"),
	navigation_links = $("#nav-wrap a");

	if($("body").hasClass('homepage')) {

		sections.waypoint( {

	      handler: function(event, direction) {

			   var active_section;

				active_section = $(this);
				if (direction === "up") active_section = active_section.prev();

				var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

	         navigation_links.parent().removeClass("current");
				active_link.parent().addClass("current");

			},
			offset: '25%'
		});

	}

   /*----------------------------------------------------*/
  	/* Flexslider
  	/*----------------------------------------------------*/
  	$(window).load(function() {  		

	  	$('#hero-slider').flexslider({
	   	namespace: "flex-",
	      controlsContainer: ".flex-container",
	      animation: 'fade',
	      controlNav: true,
	      directionNav: false,
	      smoothHeight: true,
	      slideshowSpeed: 7000,
	      animationSpeed: 600,
	      randomize: false
	   });	   

   });

 
	/*----------------------------------------------------*/
	/*	contact form
	------------------------------------------------------*/

   $('form#contactForm button.submit').on('click', function() {

      $('#image-loader').fadeIn();

      var contactFname = $('#contactForm #contactFname').val();
      var mobileNum = $('#contactForm #mobileNum').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();
	 if(document.getElementById("vehicle1").checked){
		 var events1=1;
	 }
	 else 
		 var events1=0;
	 if(document.getElementById("vehicle2").checked){
		 var events2=1;
	 }
	 else 
		 var events2=0;
	 if(document.getElementById("vehicle3").checked){
		 var events3=1;
	 }
	 else 
		 var events3=0;
	 if(document.getElementById("vehicle4").checked){
		 var events4=1;
	 }
	 else 
		 var events4=0;
	 if(document.getElementById("vehicle5").checked){
		 var events5=1;
	 }
	 else 
		 var events5=0;
	 if(document.getElementById("vehicle6").checked){
		 var events6=1;
	 }
	 else 
		 var events6=0;
	 if(document.getElementById("vehicle7").checked){
		 var events7=1;
	 }
	 else 
		 var events7=0;
	 if(document.getElementById("vehicle8").checked){
		 var events8=1;
	 }
	 else 
		 var events8=0;
	 if(document.getElementById("vehicle9").checked){
		 var events9=1;
	 }
	 else 
		 var events9=0;
	 if(document.getElementById("vehicle10").checked){
		 var events10=1;
	 }
	 else 
		 var events10=0;
	 if(document.getElementById("vehicle11").checked){
		 var events11=1;
	 }
	 else 
		 var events11=0;
	 if(document.getElementById("vehicle12").checked){
		 var events12=1;
	 }
	 else 
		 var events12=0;
      var data = 'contactFname=' + contactFname  + '&mobileNum=' + mobileNum + 
                 '&contactEmail=' + contactEmail + '&contactSubject=' + contactSubject + 
                 '&contactMessage=' + contactMessage + '&events1=' +events1+ '&events2=' +events2 + '&events3=' +events3+
				 '&events4=' +events4+ '&events5=' +events5+'&events6=' +events6+'&events7=' +events7+'&events8=' +events8+
				 '&events9=' +events9+ '&events10=' +events10+'&events11=' +events11+'&events12=' +events12;

      $.ajax({

	      type: "POST",
	      url: "sendEmail.php",
	      data: data,
	      success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();   
            }
            // There was an error
            else {
               $('#image-loader').fadeOut();
               $('#message-warning').html(msg);
	            $('#message-warning').fadeIn();
            }

	      }

      });
      return false;
   });


	/*-----------------------------------------------------*/
  	/* Back to top
   ------------------------------------------------------ */ 
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (jQuery(window).scrollTop() >= pxShow) {
			jQuery("#go-top").fadeIn(fadeInTime);
		} else {
			jQuery("#go-top").fadeOut(fadeOutTime);
		}

	}); 


})(jQuery);