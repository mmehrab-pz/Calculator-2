let modeBtn = document.getElementById('mode')
let main = document.getElementsByTagName('main')[0]


modeBtn.addEventListener('click', () => {
    mode = modeBtn.getAttribute('data-mode')

    if (mode === 'light') {
        modeBtn.classList.remove('lightBtn')
        modeBtn.classList.add('darkBtn')
        modeBtn.setAttribute('data-mode', 'dark')
        main.classList.remove('lightBg')
        main.classList.add('darkBg')
    } else {
        modeBtn.classList.remove('darkBtn')
        modeBtn.classList.add('lightBtn')
        modeBtn.setAttribute('data-mode', 'light')
        main.classList.remove('darkBg')
        main.classList.add('lightBg')
    }
})

// -----------------------------get number--------------------------------
let num = ''
let txt = document.getElementById('txt')
const buttons = document.querySelectorAll('#calculator>div>input')

console.log(buttons);

buttons.forEach((items) => {
    items.addEventListener('click', () => {

        if (items.value == '=') {
            num = num + ""
        } else if (items.value == 'AC') {
            num = '0'
        } else if (items.value == 'DEL') {
            num = num.slice(0 , -1)
        } else {
            num = num + items.value
        }
        txt.value = num
    })
});

// ------------------------------------show number-----------------------------