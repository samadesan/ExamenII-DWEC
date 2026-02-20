$(document).ready(function() {
    $('#pekin').change(function() {
        if ($(this).is(':checked')) {
            let nombre = prompt("Introduce tu nombre:");
            let correo = prompt("Introduce tu correo:");

            $.ajax({
                url: 'assets/pekin.php',
                method: 'POST',
                data: { nombre: nombre, correo: correo },
                success: function(response) {
                    document.getElementById('contenedor-texto').innerHTML = response;
                },
                error: function() {
                    alert('Error al enviar los datos.');
                }
            });
        }
    });
});