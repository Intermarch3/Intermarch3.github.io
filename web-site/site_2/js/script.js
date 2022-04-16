
function disparition(){
    $(document).ready(function(){
        $(".welcome_page").fadeOut(950, function() {
            $(".page_general").fadeIn(950)
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                spaceBetween: 20,
                effect: 'fade',
                loop: true,
                speed: 300,
                
                mousewheel: {
                    invert: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: false,
                    dynamicBullets: true
                },
                autoplay: {
                    delay: 5000,
                },
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            });
        })
    })
}

function AnimateBtn() {
    $("a[href^='#']").click(function(event) {
        event.preventDefault();

        var location = $(this.hash);
        var speed = 1800;
        var easing = "easeInOutCirc";

        $("html,body").animate({
                scrollTop: location[0].offsetTop
            }, speed, easing );
            return false
    });
}

window.onload=function(){
    AnimateBtn()
}