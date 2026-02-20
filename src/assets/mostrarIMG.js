$(document).ready(function () {
    $('#images').change(function () {
        if ($(this).is(':checked')) {
            $('#marruecos-img').show();
            $('#pekin-img').show();
        } else {
            $('#marruecos-img').hide();
            $('#pekin-img').hide();
        }
    });
})