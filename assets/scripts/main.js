let errorText = document.querySelector('#error-txt')
let weitEl = document.querySelector('#weight')
let convertBtn = document.querySelector('#btn')
let converted = document.getElementById('converted')
let weit = document.getElementById('weit')
convertBtn.addEventListener('click', ()=> {
    if(weitEl.value == ''){
      errorText.style.display = 'block' 
    }else{
        let weight = parseInt(weitEl.value)
        let mass = Math.round(weight * 2.2)
        converted.style.display = 'block'
        weit.innerHTML = mass
        weitEl.value = ''
    }
})