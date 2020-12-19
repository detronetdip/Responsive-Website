	// <!-- Toggel Menu Start-->							
					  var x=document.getElementById("navbar");
					  var y=document.getElementById("toggel");
	      var z=document.getElementById("headder").offsetWidth;
					  function toggler(){
					  	if(z < 900){
					  	 x.style.transform = "translateX(-80%)";
					  	 x.style.position = "relative";
					  	 x.style.top = "0px";				  	 
					  	 y.style.opacity = "0";	
					  	 }			  	 
					  }
					  function hide(){
					  	if(z < 900){
					   x.style.transform = "translateX(-750%)";
					  	 y.style.opacity = "1";
					  	 }					  	 
					  }							  
			// <!-- Toggel Menu End -->			
			// <!--change navigation start -->			
			var home=document.getElementById("home");
			var about=document.getElementById("abtt");
			var service=document.getElementById("serv");
			var contact=document.getElementById("contac");
			var gallery=document.getElementById("galery");			
			  function navhome(){
					  	 home.style.color="#0CFFE6";
			home.style.borderBottom="2px solid #0CFFE6";
					  	 contact.style.borderBottom="0";
					    about.style.borderBottom="0";
					  		service.style.borderBottom="0";
					  	 about.style.color= "#fff";	
					  	 contact.style.color= "#fff";
					  		service.style.color= "#fff";	 
					  		  gallery.style.borderBottom="0";
					  		  gallery.style.color= "#fff";	 
					  }
		 	function navabout(){
					  	 home.style.color="#fff";	 
					  	 about.style.color= "#0CFFE6";	
		 about.style.borderBottom="2px solid #0CFFE6";
					  	 contact.style.borderBottom="0";
					    service.style.borderBottom="0";
					  		home.style.borderBottom="0";
					  	 contact.style.color= "#fff";
					  		service.style.color= "#fff";	  
					  		 gallery.style.borderBottom="0";
					  		 gallery.style.color= "#fff";	 
					  }
		 function navcontact(){
					   	home.style.color="#fff";	 
					  	 about.style.color= "#fff";	
					  	 contact.style.color= "#0CFFE6";
	contact.style.borderBottom="2px solid #0CFFE6";
					  	 service.style.borderBottom="0";
					    about.style.borderBottom="0";
					  		home.style.borderBottom="0";
					  		service.style.color= "#fff";	 
					  		 gallery.style.borderBottom="0"; 
					  		 gallery.style.color= "#fff";	 
					  }
				function navservice(){
					  	 home.style.color="#fff";	 
					  	 about.style.color= "#fff";	
					  	 contact.style.color= "#fff";
					  		service.style.color= "#0CFFE6";	
	service.style.borderBottom="2px solid #0CFFE6";		 
					  		contact.style.borderBottom="0";
					    about.style.borderBottom="0";
					  		home.style.borderBottom="0";
					  		gallery.style.borderBottom="0";
					  		gallery.style.color= "#fff";	 
					  }   
					  function navgallery(){
					  	 home.style.color="#fff";
			home.style.borderBottom="0";
			gallery.style.borderBottom="2px solid #0CFFE6";
					  	 contact.style.borderBottom="0";
					    about.style.borderBottom="0";
					  		service.style.borderBottom="0";
					  	 about.style.color= "#fff";	
					  	 contact.style.color= "#fff";
					  		service.style.color= "#fff";	 
					  		gallery.style.color= "#0CFFE6";	 
					  }					  
			// <!-- change navigation end -->
			// form switch
			
			var xcontact=document.getElementById("contactform");
	 var yfeed=document.getElementById("feedbackform");
	 var zind=document.getElementById("indigator");	 
	 function contactt(){
	 	yfeed.style.transform = "translateX(-0%)";
	 	xcontact.style.transform = "translateX(-0%)";
	 	zind.style.transform = "translateX(0%)";
	 }	 
	 function registerr(){
	 	yfeed.style.transform = "translateX(-100%)";
	 	xcontact.style.transform = "translateX(-100%)";
	 	zind.style.transform = "translateX(100%)";
	 }		
// swiper
	  var swiper = new Swiper('.swiper-container', { spaceBetween: 30, centeredSlides: true, autoplay: { delay: 2500, disableOnInteraction: false, }, pagination: { el: '.swiper-pagination', clickable: true, }, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }, });
	 
	 