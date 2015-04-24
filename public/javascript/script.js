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
// $(".finn").click(function(){
// 		$(this).on("click")
// 			.addClass("active")
// 			$("div").addClass("box")
// 			$(".jake").addClass("opaque")
// 			$(".bmo").addClass("opaque")
// 			$("body").addClass("noscroll")
// 			$("img").bind("contextmenu", function(e){
// 				return false;
// 			})
// 	})
	
// 	$(".x").click(function(){
// 		$(this).on("click")
// 			$(".finn").removeClass("active")
// 			$("div").removeClass("box")
// 			$(".jake").removeClass("opaque")
// 			$(".bmo").removeClass("opaque")
// 			$("body").removeClass("noscroll")
// 	})

	
// 	$(".jake").click(function(){
// 		$(this).on("click")
// 			.addClass("active")
// 			$("div").addClass("box")
// 			$(".finn").addClass("opaque")
// 			$(".bmo").addClass("opaque")
// 			$("body").addClass("noscroll")
// 	})

// 	$(".x").click(function(){
// 		$(this).on("click")
// 			$(".jake").removeClass("active")
// 			$("div").removeClass("box")
// 			$(".finn").removeClass("opaque")
// 			$(".bmo").removeClass("opaque")
// 			$("body").removeClass("noscroll")
// 	})

// 	$(".bmo").click(function(){
// 		$(this).on("click")
// 			.addClass("active")
// 			$("div").addClass("box")
// 			$(".finn").addClass("opaque")
// 			$(".jake").addClass("opaque")
// 			$("body").addClass("noscroll")
// 	})

// 	$(".x").click(function(){
// 		$(this).on("click")
// 			$(".bmo").removeClass("active")
// 			$("div").removeClass("box")
// 			$(".finn").removeClass("opaque")
// 			$(".jake").removeClass("opaque")
// 			$("body").removeClass("noscroll")

// 	})

})
