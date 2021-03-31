const modal = document.getElementById('modalHeader')
const nav = document.getElementById('nav')
const navLinks = document.querySelectorAll('.nav__link')
const menuOpen = document.getElementById('menuOpen')
const menuClose = document.getElementById('menuClose')

function toggleMenu() {
	menuOpen.classList.toggle('active')
	menuClose.classList.toggle('active')
	nav.classList.toggle('active')
	modal.classList.toggle('active')
}

menuOpen.addEventListener('click', toggleMenu)
menuClose.addEventListener('click', toggleMenu)
navLinks.forEach((link) => link.addEventListener('click', toggleMenu))
