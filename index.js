var imagePierre = document.getElementById("pierre")
imagePierre.setAttribute("src", "1-pierre.jpg")


var imageFeuilles = document.getElementById("feuilles")
imageFeuilles.setAttribute("src", "2-feuille.jpg")

var imageCiseaux = document.getElementById("ciseaux")
imageCiseaux.setAttribute("src", "3-ciseaux.jpg")

// imgSlide = setInterval("slide", 01);

// function slide() {

// }
var imageia = document.getElementById("ia_choice")

function PFC_reset() {
    txt_result = '';
    result.innerHTML = '';
    user_point = 0;
    ia_point = 0;
}

var equal = "égalité";
var win = "gagné";
var lose = "perdu";
var txt_equal = "égalité";
var txt_win = "Vous gagnez !";
var txt_lose = "Vous avez perdu.";
var user_point = 0;
var ia_point = 0;
var bet = ["pierre", "feuille", "ciseaux"];
var result = document.getElementById("boutton_result");
result.innerHTML = '';
var txt_result = '';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function PFC(player_bet) {
    var i = Number(player_bet);
    var j = getRandomInt(3);

    if (j == 0) {
        imageia.setAttribute("src", "1-pierre.jpg")
    }
    if (j == 2) {
        imageia.setAttribute("src", "3-ciseaux.jpg")
    }
    if (j == 1) {
        imageia.setAttribute("src", "2-feuille.jpg")
    }
    if (user_point < 3 && ia_point < 3) {
        result.innerHTML += "(vous) <b>" + bet[i] + "</b> - (IA) <b>" + bet[j] + "</b> : ";

        if (i === j) {
            result.innerHTML += "<span class= equal>" + equal + "</span><br />";
        } else if ((i == 0 && j == 2) || (i == 1 && j == 0) || (i == 2 && j == 1)) {
            result.innerHTML += "<span class= win>" + win + "</span><br />";
            user_point++;
        } else {
            result.innerHTML += "<span class=lose>" + lose + "</span><br />";
            ia_point++;
        }
        result.innerHTML += "Score : " + user_point + " - " + ia_point + "<br />";
    }

    if ((user_point >= 3 || ia_point >= 3) && txt_result == '') {
        if (user_point == ia_point) {
            txt_result = "<span class= equal>" + txt_equal + "</span><br />";
        } else if (user_point > ia_point) {
            txt_result = "<span class=win>" + txt_win + "</span><br />";
        } else {
            txt_result = "<span class=lose>" + txt_lose + "</span><br />";
        }
        result.innerHTML += "<h4>Résultat final : <b>" + txt_result + "</b></h4>";
        result.innerHTML += "<button  type=button onclick= PFC_reset();>Rejouer ?</button><br />";
    }
}