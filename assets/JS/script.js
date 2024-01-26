const navbar = document.getElementById('navbar-nav')

document.getElementById('hamburger-menu').onclick = (e) => {
	navbar.classList.toggle('active')
	e.preventDefault()
}

const searchForm = document.getElementById('search-form')
const searchBox = document.getElementById('search-box')

document.getElementById('search-btn').onclick = (e) => {
	searchForm.classList.toggle('search-active')
	searchBox.focus()
	e.preventDefault()
}

const hamburger = document.getElementById('hamburger-menu')
const searchBtn = document.getElementById('search-btn')

document.addEventListener('click', function (e) {
	if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
		navbar.classList.remove('active')
	}

	if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
		searchForm.classList.remove('search-active')
	}
})
