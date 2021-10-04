var imagePierre = document.getElementById("pierre")
imagePierre.setAttribute("src", "1-pierre.jpg")


var imageFeuilles = document.getElementById("feuilles")
imageFeuilles.setAttribute("src", "2-feuille.jpg")

var imageCiseaux = document.getElementById("ciseaux")
imageCiseaux.setAttribute("src", "3-ciseaux.jpg")

const buttons = document.querySelectorAll("button")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {

        const joueur = buttons[i].innerHTML;
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let resultat = "";
        if (joueur === robot) {
            resultat = "Egalité";
        } else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Ciseaux" && robot === "Feuilles") || (joueur === "Feuilles" && robot === "Pierre")) {
            resultat = "Gagné";
        } else {
            resultat = "Perdu";
        }

        document.querySelector(".resultat").innerHTML = ` Joueur : ${joueur} Robot : ${robot} Résultat : ${resultat}`;

    });


}