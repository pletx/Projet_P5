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
const Fleche_droite = document.querySelector('.arrow_right');
const Fleche_gauche = document.querySelector('.arrow_left');

const slide = document.querySelector('.slide');
const tagLine = document.querySelector('.tagline');

const dots = document.querySelectorAll('.dot');
let Image_actuel=0

Fleche_droite.addEventListener('click', Slide_suivant);
Fleche_gauche.addEventListener('click', Slide_precedent);

/**
augmente la valeur de la variable
   "Image_actuel" de 1, 
  la prochaine image sera affichée lors de l'exécution de la fonction.
 */
function Slide_suivant() {
	Image_actuel++;
	console.log(Image_actuel)
	if (Image_actuel >  slides.length - 1) {
		Image_actuel = 0;
	}
	slide.src = './assets/images/slideshow/' + slides[Image_actuel].image;
	tagLine.innerHTML = slides[Image_actuel].tagLine;
	Changment_point()
}
/**
diminue la valeur de la variable
   "Image_actuel" de 1, 
  l'image précedent sera affichée lors de l'exécution de la fonction.
 */
function Slide_precedent() {
	Image_actuel--;
	if (Image_actuel < 0) {
		Image_actuel = slides.length - 1;
	}

	slide.src = './assets/images/slideshow/' + slides[Image_actuel].image;
	tagLine.innerHTML = slides[Image_actuel].tagLine;
	Changment_point() 
}




/**
Parcour chaque élément dans le tableau "dots".

Supprime la classe "dot_selected"pour
 chaque point donc aucun point n'est actuellement sélectionné.

Ajoute la classe "dot_selected" au point au rang correspondant
 à la valeur actuelle de la variable "Image_actuel".
 */
function Changment_point() {
    dots.forEach(function(dot) {
        dot.classList.remove('dot_selected');
    });
    dots[Image_actuel].classList.add('dot_selected');
}

