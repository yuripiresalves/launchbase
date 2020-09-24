const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const modalFullscreen = document.querySelector('.modal-fullscreen')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', () => {
        const cardId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://app.rocketseat.com.br/${cardId}`
    })
}

modalFullscreen.addEventListener('click', () => {
    modal.classList.toggle('fullscreen')
    if (modal.classList.contains('fullscreen')) {
        modalFullscreen.querySelector('span').innerText = "fullscreen_exit"
    } else {
        modalFullscreen.querySelector('span').innerText = "fullscreen"
    }
})

modalOverlay.querySelector('.modal-close').addEventListener('click', () => {
    modalOverlay.classList.remove('active')
    modal.classList.remove('fullscreen')
    modalFullscreen.querySelector('span').innerText = "fullscreen"
    modalOverlay.querySelector('iframe').src = ""
})