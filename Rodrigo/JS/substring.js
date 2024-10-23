function realizarSubstring(){
    let texto = document.getElementById('texto').value;
    let salida = document.getElementById('texto_substr');
    let separador = document.getElementById('separador').value.split(',');
    let resultado;

    let indice1 = parseInt(separador[0], 10);
    let indice2 = parseInt(separador[1], 10);
    
    resultado = texto.substring(indice1, indice2);
    
    salida.innerText = "";
    salida.innerText = resultado;
    

}