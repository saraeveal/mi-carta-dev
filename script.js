$(document).ready(function () {

    let veces = 0;

    $("#btn-activar").click(function () {
        veces++;
        $("#contador").text("Activada " + veces + " veces");

        alert("Dash de Medianoche activado");
        $(".carta").addClass("activa");
    });

    $(".carta").hover(
        function () {
            $(".rareza").text("¡MODO LEGENDARIO!");
        },
        function () {
            $(".rareza").text("✨Legendaria✨");
        }
    );

});