const card = document.querySelector('.card')

card.addEventListener('click', () => {
    const courseId = card.getAttribute('id')
    window.open(`https://app.rocketseat.com.br/${courseId}`)
})