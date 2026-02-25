$(document).ready(function () {
    $.fn.pluginAgencia = function () {
        return this.each(function () {
            $(this).animate({ backgroundColor: 'green' }, 500);
        })
    };

    $('#aplicarPlugin').click(function () {
        $('h1').pluginAgencia();
    });
});