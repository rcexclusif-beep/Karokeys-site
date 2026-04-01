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

	autoplayTimer = window.setInterval(nextSlide, 8000);
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

// ══════════════════════════════════════════════
// LIGHTBOX
// ══════════════════════════════════════════════
(function () {
	var lb = document.getElementById("lightbox");
	if (!lb) return;

	// Sécurité : forcer masquage au chargement (cas bfcache ou attribut manquant)
	lb.hidden = true;

	var lbImg = lb.querySelector(".lb-img");
	var lbCaption = lb.querySelector(".lb-caption");
	var lbDots = lb.querySelector(".lb-dots");
	var lbClose = lb.querySelector(".lb-close");
	var lbPrev = lb.querySelector(".lb-prev");
	var lbNext = lb.querySelector(".lb-next");
	var gallery = [];
	var current = 0;

	function open(images, index) {
		gallery = images;
		current = index;
		render();
		lb.hidden = false;
		document.body.style.overflow = "hidden";
		lbImg.focus();
	}

	function close() {
		lb.hidden = true;
		document.body.style.overflow = "";
		lbImg.src = ""; // reset pour éviter l'image persistante
	}

	// Fermer la lightbox si la page est restaurée depuis le bfcache
	window.addEventListener("pageshow", function (e) {
		if (e.persisted) { close(); }
	});

	function render() {
		var item = gallery[current];
		lbImg.src = item.src;
		lbImg.alt = item.alt;
		if (lbCaption) lbCaption.textContent = item.alt;

		lbPrev.style.visibility = gallery.length < 2 ? "hidden" : "";
		lbNext.style.visibility = gallery.length < 2 ? "hidden" : "";

		lbDots.innerHTML = "";
		gallery.forEach(function (_, i) {
			var btn = document.createElement("button");
			btn.type = "button";
			btn.className = "lb-dot" + (i === current ? " is-active" : "");
			btn.setAttribute("aria-label", "Photo " + (i + 1) + " sur " + gallery.length);
			(function (idx) {
				btn.addEventListener("click", function () { current = idx; render(); });
			})(i);
			lbDots.appendChild(btn);
		});
	}

	lbClose.addEventListener("click", close);
	lbPrev.addEventListener("click", function () {
		current = (current - 1 + gallery.length) % gallery.length;
		render();
	});
	lbNext.addEventListener("click", function () {
		current = (current + 1) % gallery.length;
		render();
	});
	lb.addEventListener("click", function (e) {
		if (e.target === lb) close();
	});
	document.addEventListener("keydown", function (e) {
		if (lb.hidden) return;
		if (e.key === "Escape") { close(); return; }
		if (e.key === "ArrowLeft") { current = (current - 1 + gallery.length) % gallery.length; render(); }
		if (e.key === "ArrowRight") { current = (current + 1) % gallery.length; render(); }
	});

	// Attach click handlers to all [data-lb-group] containers
	document.querySelectorAll("[data-lb-group]").forEach(function (container) {
		var allImgs = Array.from(container.querySelectorAll("img"));
		var galleryData = allImgs.map(function (img) {
			return { src: img.getAttribute("src"), alt: img.alt || "" };
		});
		allImgs.forEach(function (img, idx) {
			if (img.classList.contains("lb-only")) return;
			img.addEventListener("click", function () { open(galleryData, idx); });
		});
	});

	// Cliquer sur la photo principale ferme la lightbox
	lbImg.addEventListener("click", close);
}());

// ══════════════════════════════════════════════
// SCROLL REVEAL
// ══════════════════════════════════════════════
(function () {
	var revealEls = document.querySelectorAll(".reveal");
	var unitDetails = document.querySelectorAll(".unit-detail");

	if (!revealEls.length && !unitDetails.length) return;

	if (!("IntersectionObserver" in window)) {
		revealEls.forEach(function (el) { el.classList.add("is-visible"); });
		return;
	}

	var observer = new IntersectionObserver(
		function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
	);

	revealEls.forEach(function (el) { observer.observe(el); });

	// Reveal automatique sur les fiches hébergements / expériences
	unitDetails.forEach(function (el) {
		el.classList.add("reveal");
		observer.observe(el);
	});
}());

// ══════════════════════════════════════════════
// I18N — Moteur de traduction
// ══════════════════════════════════════════════
(function () {
	var currentLang = localStorage.getItem("lang") || "fr";

	function applyTranslations(lang) {
		if (!window.TRANSLATIONS || !window.TRANSLATIONS[lang]) return;
		var t = window.TRANSLATIONS[lang];

		// textContent simple
		document.querySelectorAll("[data-i18n]").forEach(function (el) {
			var key = el.getAttribute("data-i18n");
			if (t[key] !== undefined) el.textContent = t[key];
		});

		// innerHTML (éléments avec <br>, <strong>, etc.)
		document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
			var key = el.getAttribute("data-i18n-html");
			if (t[key] !== undefined) el.innerHTML = t[key];
		});

		// Attribut placeholder
		document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
			var key = el.getAttribute("data-i18n-placeholder");
			if (t[key] !== undefined) el.placeholder = t[key];
		});

		// Attribut aria-label
		document.querySelectorAll("[data-i18n-label]").forEach(function (el) {
			var key = el.getAttribute("data-i18n-label");
			if (t[key] !== undefined) el.setAttribute("aria-label", t[key]);
		});

		// Attribut html lang
		document.documentElement.lang = lang;
	}

	function updateSwitcher(lang) {
		var currentText = document.getElementById("lang-current-text");
		var optionBtn   = document.getElementById("lang-option-btn");
		if (!currentText || !optionBtn) return;
		var other = lang === "fr" ? "en" : "fr";
		currentText.textContent = lang.toUpperCase();
		optionBtn.textContent   = other.toUpperCase();
		optionBtn.setAttribute("data-lang", other);
	}

	function setLang(lang) {
		currentLang = lang;
		localStorage.setItem("lang", lang);
		applyTranslations(lang);
		updateSwitcher(lang);
	}

	// Init au chargement
	document.addEventListener("DOMContentLoaded", function () {
		var optionBtn = document.getElementById("lang-option-btn");
		if (optionBtn) {
			optionBtn.addEventListener("click", function () {
				setLang(this.getAttribute("data-lang"));
			});
		}
		// Toujours initialiser le switcher (affichage FR / EN)
		updateSwitcher(currentLang);
		// Appliquer les traductions si langue ≠ fr
		if (currentLang !== "fr") {
			applyTranslations(currentLang);
		}
	});
}());
