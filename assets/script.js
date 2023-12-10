const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

arrowLeft.addEventListener('click', function() {
    console.log("Clic sur la flèche de gauche");
});

arrowRight.addEventListener('click', function() {
    console.log("Clic sur la flèche de droite");
});

function handleArrowClick(event) {
    // Vérifier quel bouton de la souris a été cliqué
    if (event.button === 0) {
        console.log('Clic sur la flèche gauche');
        // Code pour le clic sur la flèche gauche
    } else if (event.button === 2) {
        console.log('Clic sur la flèche droite');
        // Code pour le clic sur la flèche droite
    }
}

// Ajout d'un event listener pour le clic sur la flèche gauche
arrowLeft.addEventListener('mousedown', handleArrowClick);

// Ajout d'un event listener pour le clic sur la flèche droite
arrowRight.addEventListener('mousedown', handleArrowClick);
