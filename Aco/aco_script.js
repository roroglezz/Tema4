// concat()

document.getElementById('btn_concat').addEventListener('click', function() {
    // Variables
    let string_uno = document.getElementById('string_uno').value;
    let string_dos = document.getElementById('string_dos').value;;
    let string_tres = document.getElementById('string_tres').value;;
    let resultado_concat = "";
    
    // Alerta con la concatenación de los valores de los inputs
    alert(`El String resultante tras concat() es: ` + resultado_concat.concat(string_uno, string_dos, string_tres));
});

// indexOf()
document.getElementById('btn_buscar').addEventListener('click', function() {
    let string = document.getElementById('str_indexOf').value;
    
});