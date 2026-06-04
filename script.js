$(document).ready(function () {

    let hobby = 1;

    function mostrarHobby() {
        $("#hobby-box").fadeOut(200, function () {

            if (hobby == 1) {
                $("#hobby-nombre").text("🎬 Ver series y películas");
                $("#hobby-desc").text("Me gusta desconectarme viendo historias, cine y series.");
                $("#hobby-horas").text("5 horas semanales");
            }
            else if (hobby == 2) {
                $("#hobby-nombre").text("📸 Tomar fotografías");
                $("#hobby-desc").text("Capturo momentos y detalles que me llaman la atención.");
                $("#hobby-horas").text("2 horas semanales");
            }
            else if (hobby == 3) {
                $("#hobby-nombre").text("🧠 Aprender cosas nuevas");
                $("#hobby-desc").text("Siempre estoy explorando nuevas herramientas y conocimientos.");
                $("#hobby-horas").text("20 horas semanales");
            }
            else if (hobby == 4) {
                $("#hobby-nombre").text("📚 Leer para desconectarme");
                $("#hobby-desc").text("Leo para relajarme y salir un momento del ruido diario.");
                $("#hobby-horas").text("2 horas semanales");
            }

            $("#hobby-horas").hide();
            $("#hobby-box").fadeIn(200);
        });
    }
    // Hobby inicial aleatorio (1 a 4)
    hobby = Math.floor(Math.random() * 4) + 1;
    mostrarHobby();

    // Botón siguiente hobby
    $("#btn-hobby").click(function () {
        hobby++;
        if (hobby > 4) {
            hobby = 1;
        }
        mostrarHobby();
    });

    // Doble click: mostrar horas
    $("#hobby-box").dblclick(function () {
        $("#hobby-horas").fadeToggle();
    });

    let veces = 0;

    $("#btn-activar").click(function () {
        veces++;
        $("#contador").text("Activada " + veces + " veces");

        alert("Dash de Medianoche activado");
        $(".carta").addClass("activa");
    });

    $(".carta").hover(
        function () {
            $(".rareza").text("✨Modo Legendario✨");
        },
        function () {
            $(".rareza").text("Rareza: Legendaria");
        }
    );

});