 wow = new WOW(
          {
          boxClass:     'wow',      // default
          animateClass: 'animated', // default
          offset:       0,          // default
          mobile:       false,       // default
          live:         true        // default
        }
        )
        wow.init();
/*
$("body").children().each(function(i,c){
		c.style.transition = "all 1s";
		c.style.opacity = 0;
});
*/




/* Start load thamer

function showsite(){
     $("#loadscreen").fadeOut(700);
     $("#loadscreen").remove();
	$(document).append($("#page2"));
	$("#page2").children().each(function(e,c){ c.style.opacity = 1; });
	
	$("nav").show(1000);
	$("#page2").show(1000);
	}

$(window).load(function(){
	setTimeout(showsite(),5000);

});

end load thamer */


/* Start load oussama*/

$(window).load(function () {

	var loading = $("#load")
	
	var overlay = $(".overlay");
	
    setInterval(function () {
    
    	loading.fadeOut(2000, function () { overlay.fadeOut(1000); });
    	
    }, 2000, function () { loading.remove(); overlay.remove(); });
    
});

/* End load oussama*/



$(document).ready(function($) {

	/*  to animate scroll  slow*/

	$('a[href^="#"]').click(function(){
	var the_id = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(the_id).offset().top
	}, 'slow');
	return false;
});

           /* speech api */
	$("#imagespeech").click(function(event) {
		alert("marche");
		responsiveVoice.speak("bonne journée je m'apple thamer belfkih , je suis étudiant à la faculté de science de tunis. je suis developpeur web et mobile");
	});
	
	/*  animation navbar*/

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


	/*  nice scroll animation*/

	$("body").nicescroll({
		cursorwidth: "0px", // cursor width in pixel (you can also write "5px")
        cursorborder: "0px solid #fff",
        scrollspeed: 60 
	});

	/*particlesJS background  */

	 particlesJS('particles-js', {
    particles: {
        color: '#ff0',
        shape: 'circle',
        opacity: 1,
        size: 3,
        size_random: true,
        nb: 25,
        line_linked: {
            enable_auto: true,
            distance: 200,
            color: '#ff0',
            width: 2,
            condensed_mode: {
                enable: true,
                rotateX: 0,
                rotateY: 0
            }
        },
        anim: {
            enable: true,
            speed: 2
        }
    },
    interactivity: {
        enable: true,
        mouse: {
            distance: 200
        },
        mode: 'grab'
    },
    retina_detect: true
});

});



 


