//Al mostrar el modal
$('#ModeloNoRegistrado').on('shown.bs.modal', function () {
    //Hago focus en el botón
    $('#myButton').trigger('focus')
    //así al presionar enter, se redirecciona a la pgina que pongas en el link
})

function fetchPerson() {
    let xhr = new XMLHttpRequest();
    let pokemonID = document.getElementById('pokemonId').value;
    let url = `https://swapi.py4e.com/api/people/${pokemonID}`;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status == 200) {
                let response = JSON.parse(this.responseText);
                console.log(response);
            } else {
                console.log('Error:', this.statusText);
                mostrarError(this.statusText);
            }
        }
    };
    xhr.send();
}

function displayPokemon() {

}