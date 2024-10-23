function realizarSubstr(){
    let texto = document.getElementById('texto').value;
    let salida = document.getElementById('texto_substr');
    let separador = document.getElementById('separador').value.split(',');
    let resultado;

    let inicio = parseInt(separador[0], 10);
    let longitud = parseInt(separador[1], 10);
    
    resultado = texto.substr(inicio, longitud);
    

    salida.innerText = "";
    resultado = texto.substr(inicio, longitud);
    salida.innerText = resultado;
    

}
