const toggleButton = document.querySelector('.nav_toggle')
const body = document.body
toggleButton.addEventListener('click', event => {
    body.classList.add('active')
})

const closeButton = document.querySelector('.nav_close_button')
closeButton.addEventListener('click', event => {
    body.classList.remove('active')
})