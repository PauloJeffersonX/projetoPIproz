const form = document.querySelector('.contact-form'); 
const formG = document.querySelectorAll('.form-group');
const campos = document.querySelectorAll('.input-requerend');
const span = document.querySelectorAll('.span-requerend')
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



function setErros(index){
    campos[index].style.border = '2px solid #e63636';
    span[index].style.display = 'block' ;
    
}
function removeErro(index){
    campos[index].style.border = '';
    span[index].style.display = 'none' ;
    
}

function nameValidate(){
    if(campos[0].value.length < 3)
    {
        setErros(0);
    }
    else
    {
        removeErro(0);
    
    }
}




function emailValidate(){
    if(emailRegex.test(campos[2].value))
    {
        removeErro(2);
    }
    else
    {
        
        setErros(2);
    }
    }











      