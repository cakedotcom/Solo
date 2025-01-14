const yes = document.querySelector('#yes-button')
const box = document.querySelector('#box')

yes.addEventListener('click', ()=> {
    box.classList.toggle('hidden')
})