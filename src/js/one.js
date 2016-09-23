	$(document).ready(function(){
		var length,
		currentIndex = 0,
		interval,
		hasStarted = false,
		t = 2000;
		length = $(".one").length;
		$(".one:not(:first)").hide();
		$(".two:first").addClass("two-selected");
		$(".icon").hide();
		$(".one, #fl, #fr").hover(function(){
			stop();
			$(".icon").show();
		},function(){
			$(".icon").hide(); 
			start();
		});

		$(".two").hover(function(e){
			stop();
			var preIndex = $(".two").filter(".two-selected").index();
			currentIndex = $(this).index();
			play(preIndex, currentIndex);
		},function(){
			start();
		});

		$("#fl").unbind("click");
		$("#fl").bind("click", function(){
			pre();
		});

		$("#fr").unbind("click");
		$("#fr").bind("click", function(){
			next();
		});

		function pre(){
			var preIndex = currentIndex;
			currentIndex = (--currentIndex + length) % length;
			play(preIndex, currentIndex);
		}

		function next(){
			var preIndex = currentIndex;
			currentIndex = ++currentIndex % length;
			play(preIndex, currentIndex);
		}

		function play(preIndex, currentIndex){
			$(".one").eq(preIndex).fadeOut(500)
			.parent().children().eq(currentIndex).fadeIn(1000);
			$(".two").removeClass("two-selected");
			$(".two").eq(currentIndex).addClass("two-selected");
			console.log(currentIndex)
		}
		function start(){
			if(!hasStarted){
				hasStarted = true;
				interval = setInterval(next, t);
			}
		}
		function stop(){
			clearInterval(interval);
			hasStarted = false;
		}
		start();
	});