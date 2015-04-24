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
})