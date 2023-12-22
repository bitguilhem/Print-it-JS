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

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
// console.log(arrowRight)

arrowLeft.addEventListener('click', function() {
    // console.log("viva la libertad carajo");
});

arrowRight.addEventListener('click', function() {
    // console.log("viva la esclavitud");
});

function handleArrowClick(event) {
    // Vérifier quel bouton de la souris a été cliqué
    if (event.button === 0) {
        // console.log('AH !');
        // Code pour le clic sur la flèche gauche
    } else if (event.button === 2) {
        // console.log('Clic sur la flèche droite');
        // Code pour le clic sur la flèche droite
    }
}

arrowLeft.addEventListener('mousedown', handleArrowClick);

// Ajout d'un event listener pour le clic sur la flèche droite
arrowRight.addEventListener('mousedown', handleArrowClick);

const dotselected = document.querySelector('.dot_selected');
// console.log("The little hot dog")



const dots = document.querySelectorAll('.dot');
const slideText = document.getElementById('slideText');
const bannerImages = [
    './assets/images/slideshow/slide1.jpg',
    './assets/images/slideshow/slide2.jpg',
    './assets/images/slideshow/slide3.jpg',
    './assets/images/slideshow/slide4.jpg'
];
let currentSlideIndex = 0;

function setActiveDot(index) {
    dots.forEach(dot => dot.classList.remove('dot_selected'));
    dots[index].classList.add('dot_selected');
}

function changeSlide(direction) {
    if (direction === 'right') {
        currentSlideIndex = (currentSlideIndex + 1) % bannerImages.length;
    } else if (direction === 'left') {
        currentSlideIndex = (currentSlideIndex - 1 + bannerImages.length) % bannerImages.length;
    }

    // Mettre à jour le point actif
    setActiveDot(currentSlideIndex);

    // Mettre à jour l'image
    document.querySelector('.banner-img').src = bannerImages[currentSlideIndex];

    // Mettre à jour le texte
    switch (currentSlideIndex) {
        case 0:
            slideText.textContent = 'Impressions tous formats en boutique et en ligne';
            break;
        case 1:
            slideText.textContent = 'Un autre texte pour la deuxième image';
            break;
        case 2:
            slideText.textContent = 'Encore un autre texte pour la troisième image';
            break;
        case 3:
            slideText.textContent = 'Et enfin, un texte pour la quatrième image';
            break;
        // Ajoutez plus de cas si nécessaire
    }
}

// Écouteur d'événements pour la flèche droite
arrowRight.addEventListener('click', function() {
    changeSlide('right');
});

// Écouteur d'événements pour la flèche gauche
arrowLeft.addEventListener('click', function() {
    changeSlide('left');
});
