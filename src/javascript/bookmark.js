import bookmarkIconActive from '../assets/images/icon-bookmark-active.svg'
import bookmarkIcon from '../assets/images/icon-bookmark.svg'

const button = document.getElementById('toggle')
const icon = document.getElementById('toggleIcon')
const text = document.getElementById('toggleText')

text.innerText = 'Bookmark'
icon.src = bookmarkIcon

function toggleButton() {
	if (!button.classList.contains('active')) {
		button.classList.add('active')
		text.innerText = 'Bookmarked'
		icon.src = bookmarkIconActive
	} else {
		button.classList.remove('active')
		text.innerText = 'Bookmark'
		icon.src = bookmarkIcon
	}
}

button.addEventListener('click', toggleButton)
