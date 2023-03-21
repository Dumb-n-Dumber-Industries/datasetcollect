const btns = document.querySelectorAll('.submitbtn')

btns.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (button.id == "Neu" && button.value==0) {
        button.style.width = "55%"
        button.style.boxShadow = '0 0 10px rgb(160, 160, 160), 0 0 10px rgb(160, 160, 160) inset'
        document.getElementById('Emo').style.width = "35%"
        document.getElementById('Emo').style.boxShadow = ''
        button.value = 1
        document.getElementById('Emo').value = 0
       
    
    }
    if (button.id == "Emo" && button.value==0) {
        button.style.width = "55%"
        button.style.boxShadow = '0 0 10px rgb(20, 173, 53), 0 0 10px rgb(20, 173, 53) inset'
        document.getElementById('Neu').style.width = "35%"
        document.getElementById('Neu').style.boxShadow = ''
        button.value = 1
        document.getElementById('Neu').value = 0
     
    
    }
    if (button.id == "Obj" && button.value==0) {
        button.style.width = "55%"
        button.style.boxShadow = '0 0 10px rgb(255, 113, 91), 0 0 10px #FF715B inset'
        document.getElementById('Sub').style.width = "35%"
        document.getElementById('Sub').style.boxShadow = ''
        button.value = 1
        document.getElementById('Sub').value = 0

    
    }
    if (button.id == "Sub" && button.value==0) {
        button.style.width = "55%"
        button.style.boxShadow = '0 0 10px rgb(79, 117, 155), 0 0 10px #4F759B inset'
        document.getElementById('Obj').style.width = "35%"
        document.getElementById('Obj').style.boxShadow = ''
        button.value = 1
        document.getElementById('Obj').value = 0
    
    
    }
    
  })
})