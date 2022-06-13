const selecao = document.querySelector("#escolha")
const chavePasso = document.querySelector('#incremento')
const btnCode = document.querySelector("#btncode")
const btnDecode = document.querySelector("#btndecode")
const entrada = document.querySelector("#entrada")
const saida = document.querySelector("#saida")
const incremento = document.querySelector("#incremento")
console.log(chavePasso)

selecao.addEventListener("change", function (){
    if(selecao.value == "cifra"){
        chavePasso.style.display = "inline"
    }else{
        chavePasso.style.display = "none"
    }
})

btnCode.addEventListener("click", function(event){
    event.preventDefault()
    saida.value = codificaCesar(entrada.value,incremento.value)
})

btnCode.addEventListener("click", function(event){
    event.preventDefault()
    saida.value = codifica64(entrada.value,incremento.value)
})

function codificaCesar(string, value){
    let resultado = ""
    const incremento = parseInt(value)
    for(let i = 0; i < string.length; i++){
        let codifica = string[i].charCodeAt()

        if(codifica >= 97 && codifica <= 122){
            let calculo = codifica + incremento 

            if (calculo > 122){
                calculo = 96 + calculo - 122
            }

            resultado += String.fromCharCode(calculo)
        }else if (codifica >= 65 && codifica <= 90){
            let calculo = codifica + incremento 

            if (calculo > 90){
                calculo = calculo - 26
            }
            resultado += String.fromCharCode(calculo)
        }else{
            resultado += string[i]
        }
    }
    return resultado
}

btnDecode.addEventListener("click", function(event){
    event.preventDefault()
    saida.value = decodificaCesar(entrada.value,incremento.value)
})

btnDecode.addEventListener("click", function(event){
    event.preventDefault()
    saida.value = decodifica64(entrada.value,incremento.value)
})

function decodificaCesar(string, value){
    let resultado = ""
    const incremento = parseInt(value)
    for(let i = 0; i < string.length; i++){
        let decodifica = string[i].charCodeAt()

        if(decodifica >= 97 && decodifica <= 122){
            let calculo = decodifica - incremento

            if (calculo < 97){
                calculo = 96 - calculo + 122  
            }

            resultado += String.fromCharCode(calculo)
        }else if (decodifica <= 90 && decodifica >= 65){
            let calculo = decodifica - incremento

            if (calculo < 65){
                calculo = calculo - 26
            }
            resultado += String.fromCharCode(calculo)
        }else {
            resultado += string[i]
        }
    }
    return resultado
}

// Função para codificar uma string para o formato base64
function codifica64 (entrada) {
    return btoa(entrada);
}


// Função para decodificar uma string do formato base64
function decodifica64 (saida) {
    return atob(saida);
}