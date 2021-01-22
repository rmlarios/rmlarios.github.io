$('.cd-testimonials-wrapper').flexslider({
	//declare the slider items
	selector: ".cd-testimonials > li",
	animation: "slide",
	//do not add navigation for paging control of each slide
	controlNav: false,
	slideshow: false,
	//Allow height of the slider to animate smoothly in horizontal mode
	smoothHeight: true,
	start: function(){
		 $('.cd-testimonials').children('li').css({
				'opacity': 1,
				'position': 'relative'
		 });
	}
});