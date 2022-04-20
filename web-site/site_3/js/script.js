document.getElementById("subscribe").onclick = function() {subscribe()};
var abo = 145

function subscribe() {
	btn = document.getElementById("subscribe")
	if (btn.textContent == "S'abonner") {
		btn.innerHTML = "Abonné"
		btn.classList.add("actif");
		abo++
		document.getElementById("nb_abo").innerHTML = "<b>" + abo + "</b> abonnés"
	}
	else {
		btn.innerHTML = "S'abonner"
		btn.classList.remove("actif");
		abo--
		document.getElementById("nb_abo").innerHTML = "<b>" + abo + "</b> abonnés"
	}
}

function testdetab(page) {
	post = document.getElementsByClassName("post_publi")
	reel = document.getElementsByClassName("reel")
	video = document.getElementsByClassName("video")
	
	post_btn = document.getElementsByClassName("publication")
	reel_btn = document.getElementsByClassName("reels")
	videos_btn = document.getElementsByClassName("videos")
	
	if (page == "publi") {
		if (post[0].classList.contains("invisible")) {
			post[0].classList.remove("invisible")
			post_btn[0].classList.remove("btn_invisible")
		}
		if (reel[0].classList.contains("invisible") != true) {
			reel[0].classList.add("invisible")
			reel_btn[0].classList.add("btn_invisible")
		}
		if (video[0].classList.contains("invisible") != true) {
			video[0].classList.add("invisible")
			videos_btn[0].classList.add("btn_invisible")
		}
	}
	
	if (page == "reel") {
		if (reel[0].classList.contains("invisible")) {
			reel[0].classList.remove("invisible")
			reel_btn[0].classList.remove("btn_invisible")
		}
		if (post[0].classList.contains("invisible") != true) {
			post[0].classList.add("invisible")
			post_btn[0].classList.add("btn_invisible")
		}
		if (video[0].classList.contains("invisible") != true) {
			video[0].classList.add("invisible")
			videos_btn[0].classList.add("btn_invisible")
		}
	}
	
	if (page == "video") {
		if (video[0].classList.contains("invisible")) {
			video[0].classList.remove("invisible")
			videos_btn[0].classList.remove("btn_invisible")
		}
		if (post[0].classList.contains("invisible") != true) {
			post[0].classList.add("invisible")
			post_btn[0].classList.add("btn_invisible")
		}
		if (reel[0].classList.contains("invisible") != true) {
			reel[0].classList.add("invisible")
			reel_btn[0].classList.add("btn_invisible")
		}
	}
}

tab = {
	reel: "reel",
	post: "publi",
	video: "video"
}