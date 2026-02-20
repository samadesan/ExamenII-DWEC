$(document).ready(function () {
    $('#marruecos-img, #pekin-img').hover(function () {
        $(this).stop(true, true).animate({ width: '+=20px', height: '+=20px' }, 500).fadeTo(500, 0.5);
    }, function () {
        $(this).stop(true, true).animate({ width: '-=20px', height: '-=20px' }, 500).fadeTo(500, 1);
    });
});