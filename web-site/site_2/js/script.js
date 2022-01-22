// variable global
var cardPosition = 0;
const LeftBtn = querySelector('.skip_left_btn');
const RightBtn = querySelector('.skip_right_btn');
const element = document.querySelector("#scroll_menu");
let canExecute = true;


function disparition(){
    $(document).ready(function(){
        $(".welcome_page").fadeOut(950, function() {
            $(".page_general").fadeIn(950)
        })
    })
}


// systeme horizontal scroll of section 3

function skipReady() {
    canExecute = true
}

// choisi entre btn grisé quand fin ou retour de l'autre coté si fin
// si choix = retour, remettre color skipLeftBtn

    function skipCardLeft () {
    const LeftBtn = querySelector('.skip_left_btn');
    const RightBtn = querySelector('.skip_right_btn');
    const element = document.querySelector("#scroll_menu");
    if(canExecute) {
        canExecute = false;
        if (cardPosition == 0) {
            LeftBtn.style.color = "grey";
            LeftBtn.style.cursor = "not-allowed";
        } else if (cardPosition == 1) {
            cardPosition--;
            LeftBtn.style.color = "grey";
            LeftBtn.style.cursor = "not-allowed";
            element.scrollBy({
                left: -640,
                behavior: "smooth"
            });
        } else {
            RightBtn.style.color = "#367BF0";
            RightBtn.style.cursor = "pointer";
            cardPosition--;
            element.scrollBy({
                left: -640,
                behavior: "smooth"
            });
        }
        setTimeout(skipReady, 700)
    }
}


function skipCardRight () {
    const LeftBtn = querySelector('.skip_left_btn');
    const RightBtn = querySelector('.skip_right_btn');
    const element = document.querySelector("#scroll_menu");
    const nbCard = element.children.length - 2;
    if(canExecute) {
        canExecute = false;
        if (cardPosition == nbCard) {
            RightBtn.style.color = "grey";
            RightBtn.style.cursor = "not-allowed";
        } else if (cardPosition == (nbCard - 1)) {
            RightBtn.style.color = "grey";
            RightBtn.style.cursor = "not-allowed";
            cardPosition++;
            element.scrollBy({
                left: 640,
                behavior: "smooth"
            });
        } else {
            LeftBtn.style.color = "#367BF0";
            LeftBtn.style.cursor = "pointer";
            cardPosition++;
            element.scrollBy({
                left: 640,
                behavior: "smooth"
            });
        }
        setTimeout(skipReady, 700);
    }
}


/*
function skipCard(direction=['left', 'right']) {
    const element = document.querySelector("#scroll_menu");
    var nbCard = element.children.length - 2;
    if (direction == 'left') {
        if (cardPosition == 0) {
            element.scrollBy({
                left: 5120,
                behavior: "smooth"
            });
            cardPosition = nbCard;
        } else {
            cardPosition--;
            element.scrollBy({
                left: -640,
                behavior: "smooth"
            });
        }
    } else if (direction == 'right') {
        if (cardPosition == nbCard) {
            element.scrollBy({
                left: -5120,
                behavior: "smooth"
            });
            cardPosition = 0;
        } else {
            cardPosition++;
            element.scrollBy({
                left: 640,
                behavior: "smooth"
            });
        }
    }
}
*/


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


function querySelector(selector = "string") {
    return document.querySelector(selector);
}


window.onload=function(){
    AnimateBtn()
    //document.querySelector(".skip_right_btn").addEventListener('click', skipCardRight, false);
    //document.querySelector(".skip_left_btn").addEventListener('click', skipCardLeft, false);
}





