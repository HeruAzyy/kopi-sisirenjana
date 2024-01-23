const navbar = document.getElementById('navbar-nav')

document.getElementById('hamburger-menu').onclick = () => {
	navbar.classList.toggle('active')
}

const hamburger = document.getElementById('hamburger-menu')

document.addEventListener('click', function (e) {
	if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
		navbar.classList.remove('active')
	}
})
