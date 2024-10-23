function realizarSplit(){
    let texto = document.getElementById('texto').value;
    let salida = document.getElementById('texto_split');
    let separador = document.getElementById('separador').value;
    let resultado;
   
    resultado = texto.split(separador);
    for(let i=0;i<resultado.length;i++){
        salida.innerText += resultado[i] + "\n";
    }
    

}
