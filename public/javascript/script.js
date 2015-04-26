$(document).ready(function() {
	$("nav ul li a:nth-of-type(1)")
		.mouseover(function(){
			$(this)
				.animate({
					backgroundColor: "#A0150E",
					color: "#B5B5B5",
					borderRadius: "1em"
				}, 1000)
		})
		.mouseleave(function(){
			$(this)
				.animate({
					backgroundColor: "#C42A22",
					color: "#780600",
					borderRadius: 0
				}, 500)
		})
	// $("")

	 $(".img1").hover(function(){
	     $(".img2").css("opacity","0.2");
	     $(".img3").css("opacity","0.2");
	     $(".img4").css("opacity","0.2");
	     $(".img5").css("opacity","0.2");
	     $(".img6").css("opacity","0.2");
	        },function(){
	     	 $(".img2").css("opacity","1");
	     	 $(".img3").css("opacity","1");
	         $(".img4").css("opacity","1");
	    	 $(".img5").css("opacity","1");
	         $(".img6").css("opacity","1");
    });
	 	 $(".img2").hover(function(){
	     $(".img1").css("opacity","0.2");
	     $(".img3").css("opacity","0.2");
	     $(".img4").css("opacity","0.2");
	     $(".img5").css("opacity","0.2");
	     $(".img6").css("opacity","0.2");
	        },function(){
	     	 $(".img1").css("opacity","1");
	     	 $(".img3").css("opacity","1");
	         $(".img4").css("opacity","1");
	    	 $(".img5").css("opacity","1");
	         $(".img6").css("opacity","1");

    });
	 	 	 $(".img3").hover(function(){
	     $(".img1").css("opacity","0.2");
	     $(".img2").css("opacity","0.2");
	     $(".img4").css("opacity","0.2");
	     $(".img5").css("opacity","0.2");
	     $(".img6").css("opacity","0.2");
	        },function(){
	     	 $(".img1").css("opacity","1");
	     	 $(".img2").css("opacity","1");
	         $(".img4").css("opacity","1");
	    	 $(".img5").css("opacity","1");
	         $(".img6").css("opacity","1");

    });
	 $(".img4").hover(function(){
	     $(".img1").css("opacity","0.2");
	     $(".img2").css("opacity","0.2");
	     $(".img3").css("opacity","0.2");
	     $(".img5").css("opacity","0.2");
	     $(".img6").css("opacity","0.2");
	        },function(){
	     	 $(".img2").css("opacity","1");
	     	 $(".img3").css("opacity","1");
	         $(".img1").css("opacity","1");
	    	 $(".img5").css("opacity","1");
	         $(".img6").css("opacity","1");

    });
	 	 $(".img5").hover(function(){
	     $(".img2").css("opacity","0.2");
	     $(".img3").css("opacity","0.2");
	     $(".img4").css("opacity","0.2");
	     $(".img1").css("opacity","0.2");
	     $(".img6").css("opacity","0.2");
	        },function(){
	     	 $(".img2").css("opacity","1");
	     	 $(".img3").css("opacity","1");
	         $(".img4").css("opacity","1");
	    	 $(".img1").css("opacity","1");
	         $(".img6").css("opacity","1");

    });
	 	 $(".img6").hover(function(){
	     $(".img2").css("opacity","0.2");
	     $(".img3").css("opacity","0.2");
	     $(".img4").css("opacity","0.2");
	     $(".img5").css("opacity","0.2");
	     $(".img1").css("opacity","0.2");
	        },function(){
	     	 $(".img2").css("opacity","1");
	     	 $(".img3").css("opacity","1");
	         $(".img4").css("opacity","1");
	    	 $(".img5").css("opacity","1");
	         $(".img1").css("opacity","1");

    });
 //     $("a1").click(function(){
	// $("#inner3").animate( { 
 //   	   opacity: 0.5,  high:"100%", width: "100%" 
 //   	} , 2000 );
 //    })
})

