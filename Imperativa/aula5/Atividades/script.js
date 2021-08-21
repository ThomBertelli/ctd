function convertePolegada(polegada){
    polegada = prompt("Informe quantas polegadas deseja converter:") 
    var centimetros = polegada * 2.54;
    alert(`${polegada} polegas são ${centimetros}centímetros`)
}

function converteString(string){
    string = prompt("Informe as palavras que deseja tranformar em uma URL:")
    var url = `https://www.${string}.com.br`;
    alert(`Sua URL ficou assim:\n${url}`)
}

function exclamando(exclamacao){
    exclamacao= prompt("Informe a frase que deseja exclamar.")
    alert(exclamacao + '!')
}
function anoCao(caoAnos){
    caoAnos= prompt("Informe a idade do cachorro.")
    var anosHumanos = caoAnos * 7;
    alert(`${caoAnos} anos de cacharro equivalem a ${anosHumanos} anos humanos.`)
}






