new WOW().init();
/*
$("body").children().each(function(i,c){
		c.style.transition = "all 1s";
		c.style.opacity = 0;
});
*/

//$(".index").hide();
//$(".spinner").show();
$(window).load("index.html", function(){
	//$(".page-top").hide();
        
            //alert("External content loaded successfully!");
           $(".spinner").fadeOut('slow');
           $("body").fadeIn('slow');
    });

$(document).ready(function($) {
	
	$("nav").css({
		height: '100px'
	});
	var navscroll = $("nav").offset().top;
	$(window).scroll(function(event) {
		if($(this).scrollTop() >navscroll+20){
			$("nav").animate({height: 70}, 600);
		}else{
			if(($this).scrollTop()<navscroll+20){
				$("nav").animate({height: 100}, 600);
			}
			
		}
	});
});

