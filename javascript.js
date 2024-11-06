// EVENTO DA NAVBAR
    // QUANDO O INPUT FOR FOCADO
    document.getElementById('img_user').addEventListener('focus',function(){
        document.getElementById('foco')
    })

    // QUANDO O INPUT NÃO FOR FOCADO
    document.getElementById('img_user').addEventListener('blur',function(){
        document.getElementById('foco').style.display='block'
    })

//EVENTO DA PUBLICAÇÃO
    document.addEventListener('click',function(event){

        const elementos = [document.getElementById('PUBLIC'), document.getElementById('IGTV'), document.getElementById('SALVO'), document.getElementById('MARCADOS')]

        const valores = [ document.getElementById('versao_public'),document.getElementById('versao_igtv'),document.getElementById('versao_salvo'),document.getElementById('versao_marcados')]
       
        elementos[0].contains(event.target) ?(
            valores[0].style.display='block',
            elementos[0].style.borderTop = '3px solid black',
            valores.forEach((elemento, indice) => {
                if (indice !== 0) {
                    elemento.style.display = 'none';
                    elementos[indice].style.borderTop = '0px solid black';
                }
                
            })
        ):null;

        elementos[1].contains(event.target) ?(
            valores[1].style.display='block',
            elementos[1].style.borderTop = '3px solid black',
            valores.forEach((elemento, indice) => {
                if (indice !== 1) {
                    elemento.style.display = 'none';
                    elementos[indice].style.borderTop = '0px solid black';
                }
                
            })
            
        ): null;

        elementos[2].contains(event.target) ? (
            valores[2].style.display='block',
            elementos[2].style.borderTop = '3px solid black',
            valores.forEach((elemento, indice) => {
            if (indice !== 2) {
                elemento.style.display = 'none';
                elementos[indice].style.borderTop = '0px solid black';
            }  
        })
        ) :null;            

        elementos[3].contains(event.target) ? (
            valores[3].style.display='block',
            elementos[3].style.borderTop = '3px solid black',
            valores.forEach((elemento, indice) => {
            if (indice !== 3) {
                elemento.style.display = 'none';
                elementos[indice].style.borderTop = '0px solid black';
            }  
        })
        ) :null;

    })


