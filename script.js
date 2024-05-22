
const formulario = document.querySelector('.fale-conosco')
const fundotransparente =document.querySelector('.fundo-transparente')




const buttonContact = () =>{

    formulario.style.left = '40%'
    formulario.style.left.transform = 'translateX(-40%)' 
    fundotransparente.style.visibility = 'visible' 

}

const desmostrar = () =>{
    fundotransparente.style.visibility = 'hidden' 
    formulario.style.left = '-14%'
    formulario.style.left.transform = 'translateX(0)' 




}


  


