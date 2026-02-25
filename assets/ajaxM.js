document.addEventListener("DOMContentLoaded", function() {
    let xhr = new XMLHttpRequest();
    document.getElementById("marruecos").addEventListener("change", function() {
        if (this.checked) {
            xhr.open("GET", "marruecos.txt", true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    document.getElementById("contenedor-texto").innerText = xhr.responseText;
                    if (document.getElementById("extras").checked) {
                        document.getElementById("contenedor-img").innerHTML = '<img src="img/marruecos.jpg" alt="Marruecos">';
                    }
                }
            };
            xhr.send();
        }
    });
})