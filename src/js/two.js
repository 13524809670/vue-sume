$(document).ready(function) {
 	 $('.box.one').hover(function(){
				$(".cover", this).stop().animate({top:'300px'},{queue:false,duration:160});
			}, function() {
				$(".cover", this).stop().animate({top:'290px'},{queue:false,duration:160});
			});

		$('.box.two').hover(function(){
				$(".cover", this).stop().animate({top:'160px'},{queue:false,duration:160});
			}, function() {
				$(".cover", this).stop().animate({top:'290px'},{queue:false,duration:160});
			});

		$('.box.three').hover(function(){
				$(".cover", this).stop().animate({top:'160px'},{queue:false,duration:300});
			}, function() {
				$(".cover", this).stop().animate({top:'290px'},{queue:false,duration:300});
			});
	}