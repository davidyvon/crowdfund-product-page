const backThisProjectButton = document.getElementById('backThisProject')
const noRewardItem = document.getElementById('noRewardItem')
const productsModal = document.getElementById('productsModal')
const closeModalButton = document.getElementById('closeModal')
const confirmModal = document.getElementById('confirmModal')
const confirmModalButton = document.getElementById('confirmButton')
const bambooEditionItem = document.getElementById('bambooEditionItem')
const blackEditionItem = document.getElementById('blackEditionItem')
const payoutBlackEdition = document.getElementById('payoutBlackEdition')
const payoutBambooEdition = document.getElementById('payoutBambooEdition')
const bambooEditionProduct = document.getElementById('selectBambooEdition')
const blackEditionProduct = document.getElementById('selectBlackEdition')

// Init progress bar
const progressBar = document.querySelector('.progress-bar--progression')
let progressBarDataAttribute = progressBar.dataset.done
progressBarDataAttribute = 89
progressBar.style.width = `${progressBarDataAttribute}%`

// Update backers informations : total amount, total backers, days left
const backedAmount = document.getElementById('fundingAmount')
function updateInfos(amount) {
	const totalBacker = document.getElementById('totalBacker')

	const newAmount = parseFloat(backedAmount.innerHTML.replace(/\$/, '')) + parseFloat(amount)
	backedAmount.innerHTML = `$${newAmount.toFixed(3)}`

	const newBacker = parseFloat(totalBacker.innerHTML) + parseFloat(1 / 1000)
	totalBacker.innerHTML = newBacker.toFixed(3)

	// Update progress bar
	progressBarDataAttribute = 0
	const updatedProgress = Number(progressBarDataAttribute) + newAmount

	progressBar.style.width = `${updatedProgress}%`
}

// Handles modals
backThisProjectButton.addEventListener('click', () => {
	productsModal.classList.add('active')
})

closeModalButton.addEventListener('click', () => {
	productsModal.classList.remove('active')
})

function showModal(modal) {
	modal.classList.add('active')
}

function closeModal(modal) {
	modal.classList.remove('active')
}

bambooEditionProduct.addEventListener('click', () => {
	bambooEditionItem.checked = true
	showModal(productsModal)
})

blackEditionProduct.addEventListener('click', () => {
	blackEditionItem.checked = true
	showModal(productsModal)
})

confirmModalButton.addEventListener('click', () => {
	confirmModal.classList.remove('active')
	closeModal(productsModal)
})

// Handles 'No Reward' Pledge
noRewardItem.addEventListener('click', () => {
	if (noRewardItem.checked) {
		confirmModal.classList.toggle('active')
		updateInfos(0)
	}
})

// Handles 'Bamboo Edition' Pledge
payoutBambooEdition.addEventListener('click', () => {
	const payoutAmountBamboo = document.getElementById('payoutAmountBamboo')

	const pledgeAmount = payoutAmountBamboo.value / 1000

	if (bambooEditionItem.checked && payoutAmountBamboo.value >= 25) {
		confirmModal.classList.add('active')
		updateInfos(pledgeAmount)
	} else {
		alert('Pledge must be at least $25')
	}
})

// Handles 'Black Edition' Pledge
payoutBlackEdition.addEventListener('click', () => {
	const payoutAmountBlack = document.getElementById('payoutAmountBlack')

	const pledgeAmount = payoutAmountBlack.value / 1000

	if (blackEditionItem.checked && payoutAmountBlack.value >= 75) {
		confirmModal.classList.add('active')
		updateInfos(pledgeAmount)
	} else {
		alert('Pledge must be at least $75')
	}
})
