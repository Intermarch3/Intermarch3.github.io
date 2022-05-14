$(".social-btn").hover(
    function() {
        this.attributes[1].nodeValue = '#367BF0'
    },function() {
        this.attributes[1].nodeValue = '#f5f3ea'
    }
)


function disparition(){
    $(document).ready(function(){
        $(".welcome_page").fadeOut(950, function() {
            $(".page_general").fadeIn(950, function() {
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

document.getElementById('switch_mode').addEventListener('change', (e) => {
    this.checkboxValue = e.target.checked ? 'on' : 'off';
    if (this.checkboxValue == "on") {
        light_mode()
    } else {
        light_mode("light")
    }
})


function light_mode(mode) {
    btns = document.getElementsByClassName("nav_bar_btn")
    bars = document.getElementsByClassName("skill")
    // add transition effect
    for (btn of btns) {
        btn.style.transition = "all .2s ease-in-out"
    }
    for (bar of bars) {
        bar.style.transition = "all .2s ease-in-out"
    }
    document.getElementsByClassName("nav-bar")[0].style.transition = "all .2s ease-in-out"
    document.getElementsByClassName("section1")[0].style.transition = "all .2s ease-in-out"
    document.getElementsByClassName("h3_card")[0].style.transition = "all .2s ease-in-out"
    document.getElementsByClassName("h3_card")[1].style.transition = "all .2s ease-in-out"
    document.getElementsByClassName("wave_sec2")[0].style.transition = "all .2s ease-in-out"
    document.getElementsByClassName("wave_bas")[0].style.transition = "all .2s ease-in-out"
    document.getElementsByClassName("slider-image")[5].style.transition = "all .2s ease-in-out"
    document.getElementsByClassName("intersection")[0].style.transition = "all .2s ease-in-out"
    document.getElementsByClassName("card")[0].style.transition = "all .2s ease-in-out"
    document.getElementsByClassName("section3")[0].style.transition = "all .2s ease-in-out"
    document.getElementsByClassName("title_project")[0].style.transition = "all .2s ease-in-out"
    document.body.style.transition = "all .2s ease-in-out"
    document.getElementsByClassName("section4")[0].style.transition = "all .2s ease-in-out"
    document.getElementsByClassName("button-text")[0].style.transition = "all .2s ease-in-out"
    // add light_mode class
    for (btn of btns) {
        btn.classList.toggle("light_mode")
    }
    for (bar of bars) {
        bar.classList.toggle("light_mode")
    }
    if(mode == "light") {
        document.getElementsByClassName("wave_sec2")[0].attributes[1].value = 'img/wave_white_mode.png'
        document.getElementsByClassName("wave_bas")[0].attributes[1].value = 'img/wave_bas_white_mode.png'
        document.getElementsByClassName("slider-image")[5].style.filter = 'invert(100%)'
    } else {
        document.getElementsByClassName("wave_sec2")[0].attributes[1].value = 'img/wave.png'
        document.getElementsByClassName("wave_bas")[0].attributes[1].value = 'img/wave_bas.png'
        document.getElementsByClassName("slider-image")[5].style.filter = 'invert(0%)'
    }
    document.body.classList.toggle("light_mode")
    document.getElementsByClassName("section1")[0].classList.toggle("light_mode")
    document.getElementsByClassName("h3_card")[0].classList.toggle("light_mode")
    document.getElementsByClassName("h3_card")[1].classList.toggle("light_mode")
    document.getElementsByClassName("nav-bar")[0].classList.toggle("light_mode")
    document.getElementsByClassName("intersection")[0].classList.toggle("light_mode")
    document.getElementsByClassName("card")[0].classList.toggle("light_mode")
    document.getElementsByClassName("section3")[0].classList.toggle("light_mode")
    document.getElementsByClassName("title_project")[0].classList.toggle("light_mode")
    document.getElementsByClassName("section4")[0].classList.toggle("light_mode")
    document.getElementsByClassName("button-text")[0].classList.toggle("light_mode")
}


window.onload = function() {
    AnimateBtn()
}


const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.1)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => { 
    handleScrollAnimation();
});