// Smooth Scroll y tooltip
$(document).ready(function () {
    $("a").click(function (event) {
        event.preventDefault();
        var gato = this.hash;
        $("html, body").animate({
            scrollTop: $(gato).offset().top - 70,
        }, 1000);
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})