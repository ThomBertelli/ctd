


function podeSubir(altura, acompanhada){
    if(altura >= 140 && altura < 200){
       console.log("Acesso Autorizado")
        
    }else if(altura < 140 && acompanhada === true){
        console.log("Acesso Autorizado")
        
    }else{
        console.log("Acesso Negado") 
    }
}


podeSubir(130,true)
