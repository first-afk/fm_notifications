const mark = document.querySelector('.left')
const text = document.querySelector('.text')
const text2 = document.querySelector('#text2')
const text3 = document.querySelector('#text3')

function deactivate() {
    text.style.backgroundColor =  'white'
    text2.style.backgroundColor = 'white'
    text3.style.backgroundColor = 'white'
}

mark.addEventListener('click', deactivate)