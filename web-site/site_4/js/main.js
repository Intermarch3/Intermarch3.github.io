var quizz = {
    "questions": [
        {
            "question": "Quelle est la capitale de la France ?",
            "responses": ["Lyon", "Paris","Marseille"],
            "correct": "Paris",
            "info": "la capital est Paris et elle se situe au centre de la France"
        },
        {
            "question": "quelle heure est t'il ?",
            "responses": ["12h", "13h","14h"],
            "correct": "12h",
            "info": "il est effectivement 12 heure sur ma montre"
        },
        {
            "question": "test question 3 ?",
            "responses": ["1", "2","3"],
            "correct": "3",
            "info": "fin du test"
        }
    ]
}

var choisie = false
var nb_question = -1
var score = 0
var len_quizz = quizz.questions.length 
var point = 20 / len_quizz

function play() {
    document.getElementById("menu").style.display = "none"
    next()
    document.getElementById("main").style.display = "grid"
}

function next() {
    document.getElementsByClassName("score")[0].textContent = Math.round(score) + " / 20"
    nb_question++
    if (nb_question >= quizz.questions.length) {
        document.getElementsByClassName("nb_questions")[0].textContent = len_quizz + " / " + len_quizz
        end()
    } else {
        choisie = false
        question = document.getElementsByClassName("question")[0]
        question.innerHTML = "<h1>" + quizz.questions[nb_question].question + "</h1>"
        document.getElementsByClassName("nb_questions")[0].textContent = nb_question + " / " + len_quizz
        reponse = document.getElementsByClassName("btn")
        document.getElementById("info_reponse").textContent = ""
        for (let i = 0; i < 3; i++) {
            reponse[i].style.backgroundColor = 'white';
            reponse[i].textContent = quizz.questions[nb_question].responses[i]
        }
    }
}

function check(elem) {
    reponse = document.getElementsByClassName("btn");
    if (choisie != true) {
        choisie = true
        if (elem.textContent == quizz.questions[nb_question].correct) {
            console.log("juste")
            score += point
            document.getElementsByClassName("score")[0].textContent = Math.round(score) + " / 20"
        } else {
            console.log("faux")
        }
        for (let i = 0; i < 3; i++) {
            if (reponse[i].textContent == quizz.questions[nb_question].correct) {
                reponse[i].style.backgroundColor = 'green';
            } else {
                reponse[i].style.backgroundColor = 'red';
            }
        }
        document.getElementById("info_reponse").textContent = quizz.questions[nb_question].info
    }
}

function end() {
    document.getElementById("end").style.display = "flex";
    document.getElementById("main").style.display = "none";
    document.getElementById("end_score").textContent = Math.round(score) + " / 20";
}