const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
	menuToggle.addEventListener("click", () => {
		const isOpen = mainNav.classList.toggle("is-open");
		menuToggle.setAttribute("aria-expanded", String(isOpen));
		menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
	});

	mainNav.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", () => {
			if (window.innerWidth < 768) {
				mainNav.classList.remove("is-open");
				menuToggle.setAttribute("aria-expanded", "false");
				menuToggle.setAttribute("aria-label", "Ouvrir le menu");
			}
		});
	});
}

const slides = Array.from(document.querySelectorAll(".slide"));
const dotsContainer = document.getElementById("carousel-dots");
const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");

let currentSlide = 0;
let autoplayTimer = null;

function renderDots() {
	if (!dotsContainer || slides.length === 0) {
		return;
	}

	dotsContainer.innerHTML = "";

	slides.forEach((_, index) => {
		const dot = document.createElement("button");
		dot.type = "button";
		dot.className = "carousel-dot";
		dot.setAttribute("aria-label", `Aller a l'image ${index + 1}`);

		dot.addEventListener("click", () => {
			goToSlide(index);
			restartAutoplay();
		});

		dotsContainer.appendChild(dot);
	});
}

function updateCarousel() {
	const dots = Array.from(document.querySelectorAll(".carousel-dot"));

	slides.forEach((slide, index) => {
		slide.classList.toggle("is-active", index === currentSlide);
		slide.setAttribute("aria-hidden", index === currentSlide ? "false" : "true");
	});

	dots.forEach((dot, index) => {
		dot.classList.toggle("is-active", index === currentSlide);
	});
}

function goToSlide(index) {
	currentSlide = (index + slides.length) % slides.length;
	updateCarousel();
}

function nextSlide() {
	goToSlide(currentSlide + 1);
}

function prevSlide() {
	goToSlide(currentSlide - 1);
}

function startAutoplay() {
	if (slides.length < 2) {
		return;
	}

	autoplayTimer = window.setInterval(nextSlide, 5000);
}

function stopAutoplay() {
	if (autoplayTimer) {
		window.clearInterval(autoplayTimer);
		autoplayTimer = null;
	}
}

function restartAutoplay() {
	stopAutoplay();
	startAutoplay();
}

if (slides.length > 0) {
	renderDots();
	updateCarousel();
	startAutoplay();

	if (nextButton) {
		nextButton.addEventListener("click", () => {
			nextSlide();
			restartAutoplay();
		});
	}

	if (prevButton) {
		prevButton.addEventListener("click", () => {
			prevSlide();
			restartAutoplay();
		});
	}

	const hero = document.querySelector(".hero-carousel");
	if (hero) {
		hero.addEventListener("mouseenter", stopAutoplay);
		hero.addEventListener("mouseleave", startAutoplay);
		hero.addEventListener("focusin", stopAutoplay);
		hero.addEventListener("focusout", startAutoplay);
	}
}
