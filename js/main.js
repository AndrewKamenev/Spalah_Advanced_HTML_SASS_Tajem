// $(document).ready(function(){
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     autoplay: true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// });
// $('.owl-carousel-review').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     autoplay: true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })
// });
$(document).ready(function() {
 	  	$(".owl-carousel").owlCarousel({
	 
	      loop:true,
		    margin:10,
		    nav:true,
		    autoplay: true,
		    
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
	 	  });	



 	  	$(".owl-carousel-review").owlCarousel({
			// loop:true,
		 //    margin:10,
		    nav:true,
		    // autoplay: true,
		     responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
	 	  });	
	 	  $('.owl-prev, .owl-next').html('');	  	
		});
		
