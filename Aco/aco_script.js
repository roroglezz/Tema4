
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

// indexOf() y lastIndexOf()
document.getElementById('btn_buscar_indexOf').addEventListener('click', function() {
    // Variables
    let string = document.getElementById('str_indexOf').value;
    let char_busqueda = document.getElementById('pos_indexOf').value;

    // Alerta con la posición de la primera aparición del caracter
    alert(`La posición de es: ${string.indexOf(char_busqueda)}`);

    /*
    Curiosidad: si dejamos el input del character que queremos buscar vacío (''), el resultado será 0
    porque, independientemente del primer String, el primer caracter será un espacio vacío. 
    */
});

document.getElementById('btn_buscar_lastIndexOf').addEventListener('click', function() {
    // Variables
    let string = document.getElementById('str_indexOf').value;
    let char_busqueda = document.getElementById('pos_indexOf').value;
    
    // Alerta con la posición de la primera aparición del caracter
    alert(`La posición de es: ${string.lastIndexOf(char_busqueda)}`);
});

// match()
document.getElementById('btn_str_match').addEventListener('click', function() {
    // Variables
    let string = document.getElementById('str_array').value;
    let regex = /[A-Z]/g;

    if (string.match(regex) === null) {
        alert('No hay coincidencias');
        return;
    }

    // Alerta que devuelve el array con los elementos que coincidan con la expresión regular
    alert(string.match(regex));
});