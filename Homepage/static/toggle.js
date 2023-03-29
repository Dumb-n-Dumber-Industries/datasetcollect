const btns = document.querySelectorAll('.submitbtn')
const switch1 = document.getElementById('switch1')
const switch2 = document.getElementById('switch2')
btns.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (button.id == "Neu" && button.value==0) {
        button.style.width = "45%"
        button.style.boxShadow = '0 0 5px rgb(160, 160, 160), 0 0 30px rgb(160, 160, 160) inset'
        document.getElementById('Emo').style.width = "45%"
        document.getElementById('Emo').style.boxShadow = ''
        button.value = 1
        document.getElementById('Emo').value = 0
        switch1.style.width = '45%'
        switch1.style.backgroundColor = 'transparent'
        switch1.style.borderRadius = '0 5px 5px 0'
        switch1.style.boxShadow = '0 0 0 #ffff'
        switch1.style.transform = 'translate(111%,-90px)'
        switch1.style.margin = '0'
    }
    if (button.id == "Emo" && button.value==0) {
        button.style.width = "45%"
        button.style.boxShadow = '0 0 5px rgb(20, 173, 53), 0 0 40px rgb(20, 173, 53) inset'
        document.getElementById('Neu').style.width = "45%"
        document.getElementById('Neu').style.boxShadow = ''

        button.value = 1
        document.getElementById('Neu').value = 0
        switch1.style.backgroundColor = 'transparent'
        switch1.style.borderRadius = '5px 0 0 5px '
        switch1.style.width = '45%'
        switch1.style.boxShadow = '0 0 0 #ffff'
        switch1.style.transform = 'translate(11%,-90px)'
        switch1.style.margin = '0'
    }
    if (button.id == "Obj" && button.value==0) {
        button.style.width = "45%"
        button.style.boxShadow = '0 0 5px rgb(255, 113, 91), 0 0 40px #FF715B inset'
        document.getElementById('Sub').style.width = "45%"
        document.getElementById('Sub').style.boxShadow = ''
        button.value = 1
        document.getElementById('Sub').value = 0
        switch2.style.backgroundColor = 'transparent'
        switch2.style.borderRadius = '0 5px 5px 0'
        switch2.style.boxShadow = '0 0 0 #ffff'
        switch2.style.width = '45%'
        switch2.style.transform = 'translate(111%,-45px)'
        switch2.style.margin = '0'
    }
    if (button.id == "Sub" && button.value==0) {
        button.style.width = "45%"
        button.style.boxShadow = '0 0 5px rgb(79, 117, 155), 0 0 40px #4F759B inset'
        document.getElementById('Obj').style.width = "45%"
        document.getElementById('Obj').style.boxShadow = ''
        button.value = 1
        document.getElementById('Obj').value = 0
        switch2.style.backgroundColor = 'transparent'
        switch2.style.borderRadius = '5px 0 0 5px '
        switch2.style.boxShadow = '0 0 0 #ffff'
        switch2.style.width = '45%'
        switch2.style.transform = 'translate(11%,-45px)'
        switch2.style.margin = '0'
    }
  })
})