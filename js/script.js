$(function() {
  // Auto play modal video
  $(".video").click(function () {
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});


//reveal
window.sr = ScrollReveal();
      sr.reveal('.infoChard1', { 
        duration: 500,
        scale: 0.4,
        delay: 0,
        rotate: { x: 250, y: 150, z: 40 },
         });
      sr.reveal('.infoChard2', { 
        duration: 500,
        scale: 0.4,
        delay: 200,
        rotate: { x: 250, y: 150, z: 40 },
         });
      sr.reveal('.infoChard3', { 
        duration: 500,
        scale: 0.4,
        delay: 400,
        rotate: { x: 250, y: 150, z: 40 },
         });
      sr.reveal('.infoChard4', { 
        duration: 500,
        scale: 0.4,
        delay: 600,
        rotate: { x: 250, y: 150, z: 40 },
         });

       sr.reveal('#about', { 
        duration: 1500,
        opacity:0
        });

        sr.reveal('#portfolio img', { 
        duration: 1000,
        origin: 'bottom',
        distance: '1000px',
        });

        sr.reveal('.serv', { 
        duration: 1200,
        scale: 0.4,
        delay: 0,
        rotate: { x: 250, y: 150, z: 140 },
         });
     
        sr.reveal('#ourServTab', { 
        duration: 1200,
        scale: 0.4,
        opacity:0
         });

        sr.reveal('#contact,footer', { 
        duration: 1200,
        scale: 0.9,
         });


//navbar scrool effect

function checkScroll() {
    var startY = $('.navbar').height();

    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("scrolled-navbar");
        $('.nav-link').addClass('scrolled-navbar-link');
        $('#up').addClass('displayB');

      } else {
        $('.navbar').removeClass("scrolled-navbar");
        $('.nav-link').removeClass('scrolled-navbar-link');
        $('.nav-link').addClass("nav-link");
        $('.navbar').addClass("navbar");// for transition
        $('#up').removeClass("displayB"); 
          
    }
}

if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}


// count effect

$('.counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
        countNum: countTo
    },

        {

            duration: 3000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }

        });



});